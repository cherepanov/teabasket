# -*- coding: UTF-8

import argparse
from kango.commands.create import CreateProjectCommand
from kango.commands.build import BuildCommand

class CommandLineProcessor(object):
	_commands = [CreateProjectCommand, BuildCommand]

	def process(self, title, version):
		parser = argparse.ArgumentParser(description=title + ' ' + version)
		subparsers = parser.add_subparsers()

		for command_class in self._commands:
			command = command_class()
			subparser = command.init_subparser(subparsers)
			subparser.set_defaults(execute=command.execute)

		args = parser.parse_args()
		args.execute(args)
