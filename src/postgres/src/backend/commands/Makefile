#-------------------------------------------------------------------------
#
# Makefile--
#    Makefile for backend/commands
#
# IDENTIFICATION
#    src/backend/commands/Makefile
#
#-------------------------------------------------------------------------

subdir = src/backend/commands
top_builddir = ../../..
include $(top_builddir)/src/Makefile.global

# override CPPFLAGS := -I$(libpq_srcdir) $(CPPFLAGS)
# $(info $$libpq_srcdir is [${libpq_srcdir}])
# note: we need libpq only because fe_utils does
# LDFLAGS_INTERNAL += -L$(top_builddir)/src/fe_utils -lpgfeutils $(libpq_pgport)
# $(info $$LDFLAGS_INTERNAL is [${LDFLAGS_INTERNAL}])
# LIBS += -L$(YB_BUILD_ROOT)/lib -lyb_util
# LIBS += -lpgport -lpgcommon

OBJS = amcmds.o aggregatecmds.o alter.o analyze.o async.o cluster.o comment.o \
	collationcmds.o constraint.o conversioncmds.o copy.o createas.o \
	dbcommands.o define.o discard.o dropcmds.o \
	event_trigger.o explain.o extension.o foreigncmds.o functioncmds.o \
	indexcmds.o lockcmds.o matview.o operatorcmds.o opclasscmds.o \
	policy.o portalcmds.o prepare.o proclang.o publicationcmds.o \
	schemacmds.o seclabel.o sequence.o statscmds.o subscriptioncmds.o \
	tablecmds.o tablespace.o trigger.o tsearchcmds.o typecmds.o user.o \
	vacuum.o vacuumlazy.o variable.o view.o ybccmds.o

# SUBDIRS = $(top_builddir)/src/bin/pg_dump

include $(top_srcdir)/src/backend/common.mk
