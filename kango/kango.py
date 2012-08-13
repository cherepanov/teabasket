#!/usr/bin/env python
# -*- coding: UTF-8

__title__ = 'Kango browser extension builder'
__author__ = 'KangoExtensions'
__version__ = '0.9.8'

import sys

def main():
	from kango.commands.processor import CommandLineProcessor
	CommandLineProcessor().process(__title__, __version__)

if __name__ == '__main__':
	version_tuple = tuple(sys.version_info[:2])
	if version_tuple < (2, 7) or version_tuple >= (3, 0):
		sys.stderr.write('Error: Python %d.%d is not supported. Please use version 2.7 or greater.\n' % version_tuple)
		sys.exit(1)
	
	main()