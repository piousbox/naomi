# Licensed under the Apache License, Version 2.0 (the “License”); you may not
# use this file except in compliance with the License. You may obtain a copy of
# the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations under
# the License.

from Naomi.system import (
    log_debug,
    log_info,
)

from .ast import Syntax
from .parse_variables import parse_variables
from .parse_contexts import parse_contexts
from borela.functions import load_yaml

def parse_syntax(compilation, home_dir, path):
    syntax = Syntax(
        compilation,
        home_dir,
        path,
    )

    compilation.index_syntax(syntax)

    raw = load_yaml(syntax.path)
    syntax.raw = raw

    syntax.name = raw.get('name', '')
    syntax.hidden = raw.get('hidden', '')
    syntax.scope = raw.get('scope', '')
    syntax.scope_suffix = raw.get('scope_suffix', '')
    syntax.file_extensions = raw.get('file_extensions', [])
    syntax.first_line_match = raw.get('first_line_match', '')

    parse_variables(syntax)
    parse_contexts(syntax)

    log_info('Done parsing: %s' % syntax.package_relpath)

    return syntax