from mkdocs.plugins import BasePlugin
import mkdocs.config.config_options
from bs4 import BeautifulSoup
import os
import os.path as osp
import requests

from pymdownx.slugs import uslugify

token = os.environ.get('REPORT_TOKEN', '')


class FindExercises(BasePlugin):
    config_scheme = (
        ('report_url', mkdocs.config.config_options.Type(str, default='')),
    )

    def on_pre_build(self, config):
        self.pages_with_exercises = []
    
    def on_files(self, files, config):
        for f in files:
            mandatory_files = ['statement.md', 'solution.py', 
                               'test_solution.py', 'meta.yml']
            md_file = mandatory_files[0]
            if f.src_path.endswith(md_file):
                exercise_folder = osp.dirname(f.abs_src_path)
                mandatory_present = [osp.exists(osp.join(exercise_folder, f)) for f in mandatory_files]
                print(mandatory_present)
                if all(mandatory_present):
                    slug_url = f.url[:-len(md_file) + 2]
                    slug_url = slug_url.replace('/', ' ').strip()
                    self.pages_with_exercises.append((uslugify(slug_url, '-'), f.url, 'CODE'))
        
        return files

    def on_page_content(self, html, page, config, files):
        soup = BeautifulSoup(html, 'html.parser')
        page_slug = page.url.replace('/', '-')
        for idx, ex in enumerate(soup.select('.admonition.question')):
            slug = str(idx)
            for c in ex['class']:
                if c.startswith('id_'):
                    slug = c[3:]
                    break
            
            tp = 'QUIZ'
            if 'short' in ex['class'] or 'long' in ex['class']:
                tp = 'TEXT'

            ex['id'] = slug = page_slug + slug
            self.pages_with_exercises.append((slug, page.url, tp))

        return str(soup)
    
    def on_post_build(self, config):
        for slug, url, tp in self.pages_with_exercises:
            try:
                st = requests.post(self.config['report_url'], data={
                    'slug': slug,
                    'url': url,
                    'type': tp
                }, headers={
                    'Authorization': f'Token {token}'
                })
            except Exception:
                print('enviar falhou', slug)
            