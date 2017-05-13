module.exports = {
	color: {
		// individual colors
		'foreground': ['color'],
		'f':          ['color'],
		'background': ['background-color'],
		'b':          ['background-color']
	},
	margin: {
		// individual directions
		'inline-start': ['margin-left'],
		'is':           ['margin-left'],
		'<':            ['margin-left'],
		'inline-end':   ['margin-right'],
		'ie':           ['margin-right'],
		'>':            ['margin-right'],
		'block-start':  ['margin-top'],
		'bs':           ['margin-top'],
		'^':            ['margin-top'],
		'block-end':    ['margin-bottom'],
		'be':           ['margin-bottom'],
		'v':            ['margin-bottom'],

		// grouped directions
		'inline': ['margin-left', 'margin-right'],
		'i':      ['margin-left', 'margin-right'],
		'-':      ['margin-left', 'margin-right'],
		'block':  ['margin-top', 'margin-bottom'],
		'b':      ['margin-top', 'margin-bottom'],
		'|':      ['margin-top', 'margin-bottom'],
		'start':  ['margin-left', 'margin-top'],
		's':      ['margin-left', 'margin-top'],
		'end':    ['margin-right', 'margin-bottom'],
		'e':      ['margin-right', 'margin-bottom'],

		// combined directions
		'inline,block-start': ['margin-left', 'margin-right', 'margin-top'],
		'ibs':                ['margin-left', 'margin-right', 'margin-top'],
		'inline,block-end':   ['margin-left', 'margin-right', 'margin-bottom'],
		'ibe':                ['margin-left', 'margin-right', 'margin-bottom'],
		'block,inline-start': ['margin-top', 'margin-bottom', 'margin-left'],
		'bis':                ['margin-top', 'margin-bottom', 'margin-left'],
		'block,inline-end':   ['margin-top', 'margin-bottom', 'margin-right'],
		'bie':                ['margin-top', 'margin-bottom', 'margin-right'],

		// all directions
		'+': ['margin-left', 'margin-right', 'margin-top', 'margin-bottom']
	},
	padding: {
		// individual directions
		'inline-start': ['padding-left'],
		'is':           ['padding-left'],
		'<':            ['padding-left'],
		'inline-end':   ['padding-right'],
		'ie':           ['padding-right'],
		'>':            ['padding-right'],
		'block-start':  ['padding-top'],
		'bs':           ['padding-top'],
		'^':            ['padding-top'],
		'block-end':    ['padding-bottom'],
		'be':           ['padding-bottom'],
		'v':            ['padding-bottom'],

		// grouped directions
		'inline': ['padding-left', 'padding-right'],
		'i':      ['padding-left', 'padding-right'],
		'-':      ['padding-left', 'padding-right'],
		'block':  ['padding-top', 'padding-bottom'],
		'b':      ['padding-top', 'padding-bottom'],
		'|':      ['padding-top', 'padding-bottom'],
		'start':  ['padding-left', 'padding-top'],
		's':      ['padding-left', 'padding-top'],
		'end':    ['padding-right', 'padding-bottom'],
		'e':      ['padding-right', 'padding-bottom'],

		// combined directions
		'inline,block-start': ['padding-left', 'padding-right', 'padding-top'],
		'ibs':                ['padding-left', 'padding-right', 'padding-top'],
		'-^':                 ['padding-left', 'padding-right', 'padding-top'],
		'inline,block-end':   ['padding-left', 'padding-right', 'padding-bottom'],
		'ibe':                ['padding-left', 'padding-right', 'padding-bottom'],
		'-v':                 ['padding-left', 'padding-right', 'padding-bottom'],
		'block,inline-start': ['padding-top', 'padding-bottom', 'padding-left'],
		'bis':                ['padding-top', 'padding-bottom', 'padding-left'],
		'|<':                 ['padding-top', 'padding-bottom', 'padding-left'],
		'block,inline-end':   ['padding-top', 'padding-bottom', 'padding-right'],
		'bie':                ['padding-top', 'padding-bottom', 'padding-right'],
		'|>':                 ['padding-top', 'padding-bottom', 'padding-right'],

		// all directions
		'+': ['padding-left', 'padding-right', 'padding-top', 'padding-bottom']
	},
	position: {
		// individual types
		'type': ['position'],
		't':    ['position'],

		// individual directions
		'inline-start': ['left'],
		'is':           ['left'],
		'<':            ['left'],
		'inline-end':   ['right'],
		'ie':           ['right'],
		'>':            ['right'],
		'block-start':  ['top'],
		'bs':           ['top'],
		'^':            ['top'],
		'block-end':    ['bottom'],
		'be':           ['bottom'],
		'v':            ['bottom'],

		// grouped directions
		'inline': ['left', 'right'],
		'i':      ['left', 'right'],
		'-':      ['left', 'right'],
		'block':  ['top', 'bottom'],
		'b':      ['top', 'bottom'],
		'|':      ['top', 'bottom'],
		'start':  ['left', 'top'],
		's':      ['left', 'top'],
		'end':    ['right', 'bottom'],
		'e':      ['right', 'bottom'],

		// combined directions
		'inline,block-start': ['left', 'right', 'top'],
		'ibs':                ['left', 'right', 'top'],
		'-^':                 ['left', 'right', 'top'],
		'inline,block-end':   ['left', 'right', 'bottom'],
		'ibe':                ['left', 'right', 'bottom'],
		'-v':                 ['left', 'right', 'bottom'],
		'block,inline-start': ['top', 'bottom', 'left'],
		'bis':                ['top', 'bottom', 'left'],
		'|<':                 ['top', 'bottom', 'left'],
		'block,inline-end':   ['top', 'bottom', 'right'],
		'bie':                ['top', 'bottom', 'right'],
		'|>':                 ['top', 'bottom', 'right'],

		// all directions
		'+': ['left', 'right', 'top', 'bottom']
	},
	size: {
		// individual length
		'inline': ['width'],
		'i':      ['width'],
		'-':      ['width'],
		'block':  ['height'],
		'b':      ['height'],
		'|':      ['height'],

		// all lengths
		'+': ['width', 'height']
	},
	text: {
		// individual font styles
		'align':      ['text-align'],
		'color':      ['color'],
		'decoration': ['text-decoration'],
		'family':     ['font-family'],
		'line':       ['line-height'],
		'size':       ['font-size'],
		'stretch':    ['font-stretch'],
		'style':      ['font-style'],
		'rendering':  ['text-rendering'],
		'transform':  ['text-transform'],
		'variant':    ['font-variant'],
		'weight':     ['font-weight']
	}
};
