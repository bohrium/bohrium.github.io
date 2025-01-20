''' author: samtenka
    create: 2020-06-20
    change: 2024-03-29
    descr: implement an interpreter for Mookdown (my own markdown variant)
    usage: run `python translate.py NAME`
           e.g.`python translate.py language` in order to translate
            `language.mookdown` into `language.html`
'''

from sys import argv

def translate_link(source):
    assert(source[0]=='<')
    assert(source[-1]=='>')
    url, text = source[1:-1].split('|')

    if url.split('.')[-1] in ('jpg', 'png'):
        return '\n<figure style="text-align:center"><img src="%s" alt="%s"></figure><figcaption style="text-align:center">%s</figcaption>' % (url, text, translate_line(text))
    else:
        return '\n<a href="%s">%s</a>' % (url, translate_line(text))

GRAY_CIRC = '<span class="gray">&#9679</span>'
SPACE = '&#160'
style_tags  = {
    '*':('<b>','</b>'),
    '`':('<tt>','</tt>'),
    '%':('<em>','</em>'),
    '~':('<del>','</del>'),
    '@':('<span style="font-variant: small-caps">', '</span>'),
    '{|':('<sup>'+GRAY_CIRC+'</sup>'+'<span class="aside"><span class="asideinner">'+GRAY_CIRC+SPACE,),
    '|}':('</span></span>',),
}
special = set(t[0] for t in style_tags)
def translate_line(line):
    ''' Convert a line of Mookdown into html'''
    style_flags = {t:False for t,v in style_tags.items() if len(v)==2}
    def process_special_char(t):
        if t in style_flags:
            style_flags[t] = not style_flags[t]
            return style_tags[t][0 if style_flags[t] else 1]
        else:
            return style_tags[t][0]

    html = ''

    # a. translate:
    i = 0
    while i != len(line):
        rest = line[i:]
        c = rest[0]
        if c=='<':
            source = rest[:1+rest.find('>')]
            html += translate_link(source)
            i += len(source)
        elif c in special:
            for t in style_tags:
                if rest.startswith(t):
                    html += process_special_char(t)
                    i += len(t)
                    break
            else:
                html += c
                i += 1
        else:
            html += c
            i += 1

    # b. clean up unclosed styles:
    for t in style_flags:
        if style_flags[t]: html += process_special_char(t)

    return html

def translate(text):
    ''' Convert Mookdown source into a full html file '''
    template = open('template.html').read()
    html = ''
    for line in text.split('\n'):
        if not line.strip():
            html += '\n<p>'
        elif line[0]=='#':
            continue
        elif line[0]=='!':
            for i,c in enumerate(line):
                if c!='!': break
            html += '\n<h%d> %s </h%d>' % (i+1, translate_line(line[i:]), i+1)
        #   elif line[0]=='$':
        #       html += '\n' + line
        else:
            html += '\n' + translate_line(line)
    return template.replace('BODY', html)

if __name__=='__main__':
    NAME, = argv[1:]
    INFILE, OUTFILE = '%s.mookdown'%NAME, '%s.html'%NAME
    html = translate(open(INFILE).read())
    open(OUTFILE, 'w').write(html)
    print('translated %s into %s' % (INFILE, OUTFILE))
