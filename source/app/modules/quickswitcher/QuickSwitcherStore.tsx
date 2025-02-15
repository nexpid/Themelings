// app/modules/quickswitcher/QuickSwitcherStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot38;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot38 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    romeo = function() { // Original name: handleConnectionOpen
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot17;
            entity = zulu.getGuildCount;
            zulu = entity.bind(zulu)();
            entity = 3;
            entity = zulu >= entity;
            if(entity) { _fun00006_ip = 77; continue _fun00005 }
 27:
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            tango = 20;
            report = zulu[tango];
            zulu = undefined;
            oscar = oscar.bind(zulu)(report);
            report = oscar.size;
            golf = _closure1_slot11;
            zulu = golf.getMutablePrivateChannels;
            zulu = zulu.bind(golf)();
            zulu = report.bind(oscar)(zulu);
            entity = zulu >= tango;
 77:
            _closure1_slot29 = entity;
            entity = new Array(0);
            _closure1_slot34 = entity;
            entity = undefined;
            return entity;
        }
    };
    mike = function(argFoo) { // Original name: generateResultFromId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 21;
            entity = tango[entity];
            tango = undefined;
            mike = mike.bind(tango)(entity);
            entity = argFoo;
            mike = mike.bind(tango)(entity);
            report = null;
            tango = report == mike;
            entity = null;
            if(tango) { _fun00008_ip = 70; continue _fun00007 }
 44:
            tango = _closure1_slot30;
            if(!(report != tango)) { _fun00008_ip = 67; continue _fun00007 }
 52:
            tango = _closure1_slot30;
            zulu = mike.type;
            entity = null;
            if(!(tango === zulu)) { _fun00008_ip = 70; continue _fun00007 }
 67:
            entity = mike;
 70:
            return entity;
        }
    };
    var _closure1_slot39 = mike;
    entity = function() { // Original name: generateInitialResults
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = _closure1_slot21;
            zulu = tango.getGuildId;
            zulu = zulu.bind(tango)();
            golf = null;
            report = golf != zulu;
            tango = undefined;
            backup = undefined;
            if(!report) { _fun00010_ip = 35; continue _fun00009 }
 32:
            backup = zulu;
 35:
            report = _closure1_slot20;
            zulu = report.getChannelId;
            zulu = zulu.bind(report)();
            oscar = golf != zulu;
            report = undefined;
            if(!oscar) { _fun00010_ip = 61; continue _fun00009 }
 58:
            report = zulu;
 61:
            var _closure2_slot0 = report;
            options = _closure1_slot30;
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 19;
            oscar = oscar[zulu];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.USER;
            if(!(oscar !== options)) { _fun00010_ip = 1462; continue _fun00009 }
 108:
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[zulu];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.APPLICATION;
            if(!(oscar !== options)) { _fun00010_ip = 1415; continue _fun00009 }
 144:
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[zulu];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.GUILD;
            if(!(oscar !== options)) { _fun00010_ip = 1368; continue _fun00009 }
 180:
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[zulu];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.TEXT_CHANNEL;
            if(!(oscar !== options)) { _fun00010_ip = 1301; continue _fun00009 }
 216:
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[zulu];
            oscar = verify.bind(tango)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.VOICE_CHANNEL;
            if(!(oscar !== options)) { _fun00010_ip = 1215; continue _fun00009 }
 252:
            yankee = new Array(0);
            verify = new Array(0);
            oscar = _closure1_slot35;
            oscar = oscar.length;
            romeo = 1;
            oscar = romeo < oscar;
            options = romeo;
            if(!oscar) { _fun00010_ip = 456; continue _fun00009 }
 285:
            offset = _closure1_slot39;
            oscar = _closure1_slot35;
            oscar = oscar[options];
            offset = offset.bind(tango)(oscar);
            if(!(golf != offset)) { _fun00010_ip = 436; continue _fun00009 }
 309:
            foxtrot = offset.type;
            kilo = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[zulu];
            oscar = kilo.bind(tango)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.TEXT_CHANNEL;
            oscar = foxtrot !== oscar;
            if(!oscar) { _fun00010_ip = 388; continue _fun00009 }
 350:
            kilo = offset.type;
            sizing = _closure1_slot0;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[zulu];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.AutocompleterResultTypes;
            foxtrot = foxtrot.VOICE_CHANNEL;
            oscar = kilo !== foxtrot;
 388:
            if(oscar) { _fun00010_ip = 423; continue _fun00009 }
 391:
            output = _closure1_slot18;
            sizing = output.can;
            foxtrot = _closure1_slot24;
            kilo = foxtrot.VIEW_CHANNEL;
            foxtrot = offset.record;
            oscar = sizing.bind(output)(kilo, foxtrot);
 423:
            if(!oscar) { _fun00010_ip = 436; continue _fun00009 }
 426:
            oscar = verify.push;
            oscar = oscar.bind(verify)(offset);
 436:
            options = options + romeo;
            oscar = _closure1_slot35;
            oscar = oscar.length;
            if(options < oscar) { _fun00010_ip = 285; continue _fun00009 }
 456:
            oscar = verify.length;
            offset = 0;
            if(!(oscar > offset)) { _fun00010_ip = 581; continue _fun00009 }
 467:
            options = yankee.push;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            oscar = echo[zulu];
            kilo = result.bind(tango)(oscar);
            foxtrot = kilo.createHeaderResult;
            oscar = 23;
            sizing = echo[oscar];
            sizing = result.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            oscar = echo[oscar];
            oscar = result.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.80lOZ2;
            oscar = sizing.bind(output)(oscar);
            foxtrot = foxtrot.bind(kilo)(oscar);
            oscar = new Array(1);
            oscar[0] = foxtrot;
            control = oscar;
            source = verify;
            update = romeo;
            verify = arraySpread(control, source, update);
            control = options;
            source = oscar;
            update = yankee;
            oscar = apply(control, source, update);
 581:
            options = function(argFoo) { // Original name: getDrafts
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = new Array(0);
                var _closure3_slot1 = entity;
                report = _closure1_slot12;
                tango = report.getRecentlyEditedDrafts;
                zulu = _closure1_slot13;
                zulu = zulu.ChannelMessage;
                tango = tango.bind(report)(zulu);
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        tango = entity.channelId;
                        zulu = _closure3_slot0;
                        entity = undefined;
                        zulu = zulu.bind(entity)(tango);
                        if(zulu) { _fun00012_ip = 57; continue _fun00011 }
 25:
                        zulu = _closure1_slot39;
                        tango = zulu.bind(entity)(tango);
                        zulu = null;
                        if(!(zulu != tango)) { _fun00012_ip = 57; continue _fun00011 }
 43:
                        zulu = _closure3_slot1;
                        mike = zulu.push;
                        mike = mike.bind(zulu)(tango);
 57:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tango = argFoo;
                    entity = _closure2_slot0;
                    entity = tango === entity;
                    if(entity) { _fun00014_ip = 34; continue _fun00013 }
 17:
                    zulu = _closure1_slot35;
                    mike = zulu.includes;
                    entity = mike.bind(zulu)(tango);
 34:
                    return entity;
                }
            };
            verify = options.bind(tango)(oscar);
            oscar = verify.length;
            if(!(oscar > offset)) { _fun00010_ip = 723; continue _fun00009 }
 609:
            options = yankee.push;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            oscar = echo[zulu];
            kilo = result.bind(tango)(oscar);
            foxtrot = kilo.createHeaderResult;
            oscar = 23;
            sizing = echo[oscar];
            sizing = result.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            oscar = echo[oscar];
            oscar = result.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.4B63jY;
            oscar = sizing.bind(output)(oscar);
            foxtrot = foxtrot.bind(kilo)(oscar);
            oscar = new Array(1);
            oscar[0] = foxtrot;
            control = oscar;
            source = verify;
            update = romeo;
            verify = arraySpread(control, source, update);
            control = options;
            source = oscar;
            update = yankee;
            oscar = apply(control, source, update);
 723:
            options = _closure1_slot19;
            oscar = options.getMentionChannelIds;
            verify = oscar.bind(options)();
            options = verify.filter;
            oscar = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = argFoo;
                    entity = _closure2_slot0;
                    entity = tango !== entity;
                    if(!entity) { _fun00016_ip = 37; continue _fun00015 }
 17:
                    zulu = _closure1_slot35;
                    mike = zulu.includes;
                    mike = mike.bind(zulu)(tango);
                    entity = !mike;
 37:
                    return entity;
                }
            };
            verify = options.bind(verify)(oscar);
            options = verify.map;
            oscar = function(argFoo) {
                zulu = _closure1_slot39;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            verify = options.bind(verify)(oscar);
            options = verify.filter;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 24;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(tango)(oscar);
            oscar = oscar.isNotNullish;
            options = options.bind(verify)(oscar);
            oscar = options.reverse;
            verify = oscar.bind(options)();
            oscar = verify.length;
            options = yankee;
            if(!(oscar > offset)) { _fun00010_ip = 924; continue _fun00009 }
 829:
            romeo = yankee.push;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            oscar = echo[zulu];
            kilo = result.bind(tango)(oscar);
            foxtrot = kilo.createHeaderResult;
            oscar = 23;
            sizing = echo[oscar];
            sizing = result.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            oscar = echo[oscar];
            oscar = result.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.61Df19;
            oscar = sizing.bind(output)(oscar);
            oscar = foxtrot.bind(kilo)(oscar);
            oscar = romeo.bind(yankee)(oscar);
            oscar = yankee.concat;
            options = oscar.bind(yankee)(verify);
 924:
            oscar = options;
            if(!(golf != backup)) { _fun00010_ip = 1161; continue _fun00009 }
 934:
            verify = _closure1_slot14;
            golf = verify.getSelectableChannelIds;
            yankee = golf.bind(verify)(backup);
            verify = yankee.filter;
            golf = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    options = argFoo;
                    zulu = _closure1_slot11;
                    entity = zulu.getChannel;
                    tango = entity.bind(zulu)(options);
                    report = null;
                    entity = report == tango;
                    if(entity) { _fun00018_ip = 40; continue _fun00017 }
 29:
                    zulu = _closure2_slot0;
                    entity = options === zulu;
 40:
                    if(entity) { _fun00018_ip = 57; continue _fun00017 }
 43:
                    oscar = _closure1_slot35;
                    zulu = oscar.includes;
                    entity = zulu.bind(oscar)(options);
 57:
                    if(entity) { _fun00018_ip = 81; continue _fun00017 }
 60:
                    golf = _closure1_slot22;
                    oscar = golf.isChannelMuted;
                    zulu = tango.guild_id;
                    entity = oscar.bind(golf)(zulu, options);
 81:
                    if(entity) { _fun00018_ip = 127; continue _fun00017 }
 84:
                    zulu = tango.parent_id;
                    zulu = report != zulu;
                    if(!zulu) { _fun00018_ip = 124; continue _fun00017 }
 97:
                    options = _closure1_slot22;
                    golf = options.isChannelMuted;
                    oscar = tango.guild_id;
                    report = tango.parent_id;
                    zulu = golf.bind(options)(oscar, report);
 124:
                    entity = zulu;
 127:
                    entity = !entity;
                    if(!entity) { _fun00018_ip = 166; continue _fun00017 }
 133:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 25;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.getHasImportantUnread;
                    entity = mike.bind(zulu)(tango);
 166:
                    return entity;
                }
            };
            yankee = verify.bind(yankee)(golf);
            verify = yankee.map;
            golf = function(argFoo) {
                zulu = _closure1_slot39;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            yankee = verify.bind(yankee)(golf);
            verify = yankee.filter;
            golf = function(argFoo) {
                entity = argFoo;
                return entity;
            };
            golf = verify.bind(yankee)(golf);
            var _closure2_slot2 = golf;
            verify = global;
            romeo = verify.Object;
            yankee = romeo.values;
            foxtrot = _closure1_slot8;
            verify = foxtrot.getActiveJoinedUnreadThreadsForGuild;
            verify = verify.bind(foxtrot)(backup);
            romeo = yankee.bind(romeo)(verify);
            yankee = romeo.forEach;
            verify = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    options = argFoo;
                    entity = undefined;
                    mike = null;
                    for(report in options)
 21:
                    {
 30:
                        yankee = report;
                        offset = _closure1_slot39;
                        romeo = offset.bind(entity)(yankee);
                        if(mike == romeo) { _fun00020_ip = 21; continue _fun00019 }
 46:
                        yankee = _closure2_slot2;
                        offset = yankee.push;
                        offset = offset.bind(yankee)(romeo);
                        _fun00020_ip = 21; continue _fun00019;
                    }
 62:
                    return entity;
                }
            };
            verify = yankee.bind(romeo)(verify);
            verify = golf.length;
            oscar = options;
            if(!(verify > offset)) { _fun00010_ip = 1161; continue _fun00009 }
 1066:
            verify = options.push;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            zulu = kilo[zulu];
            yankee = backup.bind(tango)(zulu);
            offset = yankee.createHeaderResult;
            zulu = 23;
            romeo = kilo[zulu];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            zulu = kilo[zulu];
            zulu = backup.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.ieCAhI;
            zulu = romeo.bind(foxtrot)(zulu);
            zulu = offset.bind(yankee)(zulu);
            zulu = verify.bind(options)(zulu);
            zulu = options.concat;
            oscar = zulu.bind(options)(golf);
 1161:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 20;
            zulu = options[zulu];
            zulu = golf.bind(tango)(zulu);
            golf = zulu.bind(tango)(oscar);
            oscar = golf.uniqBy;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                entity = entity.id;
                return entity;
            };
            oscar = oscar.bind(golf)(zulu);
            zulu = oscar.value;
            zulu = zulu.bind(oscar)();
            return zulu;
 1215:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 22;
            zulu = golf[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.queryChannels;
            zulu = {'query': '', 'guildId': null, 'limit': 100, 'fuzzy': true};
            verify = _closure1_slot21;
            options = verify.getGuildId;
            options = options.bind(verify)();
            zulu['guildId'] = options;
            options = function() { // Original name: filter
                entity = true;
                return entity;
            };
            zulu['filter'] = options;
            options = _closure1_slot15;
            zulu['type'] = options;
            zulu = oscar.bind(golf)(zulu);
            return zulu;
 1301:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 22;
            zulu = golf[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.queryChannels;
            zulu = {'query': '', 'guildId': null, 'limit': 100, 'fuzzy': true};
            verify = _closure1_slot21;
            options = verify.getGuildId;
            options = options.bind(verify)();
            zulu['guildId'] = options;
            zulu = oscar.bind(golf)(zulu);
            return zulu;
 1368:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 22;
            zulu = golf[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.queryGuilds;
            zulu = {'query': '', 'limit': 100, 'fuzzy': true};
            zulu = oscar.bind(golf)(zulu);
            return zulu;
 1415:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 22;
            zulu = golf[zulu];
            golf = oscar.bind(tango)(zulu);
            oscar = golf.queryApplications;
            zulu = {'query': '', 'limit': 100, 'fuzzy': true};
            zulu = oscar.bind(golf)(zulu);
            return zulu;
 1462:
            oscar = _closure1_slot10;
            zulu = oscar.getId;
            zulu = zulu.bind(oscar)();
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 22;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getRecentlyTalked;
            mike = 100;
            zulu = zulu.bind(tango)(report, mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                mike = entity.id;
                entity = _closure2_slot1;
                entity = mike !== entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo, argBar) { // Original name: updateResults
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            golf = _closure1_slot30;
            options = _closure1_slot0;
            entity = _closure1_slot2;
            report = 19;
            oscar = entity[report];
            entity = undefined;
            oscar = options.bind(entity)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.USER;
            if(!(oscar !== golf)) { _fun00022_ip = 584; continue _fun00021 }
 54:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[report];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.TEXT_CHANNEL;
            if(!(oscar !== golf)) { _fun00022_ip = 489; continue _fun00021 }
 90:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[report];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.VOICE_CHANNEL;
            if(!(oscar !== golf)) { _fun00022_ip = 394; continue _fun00021 }
 126:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[report];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.GUILD;
            if(!(oscar !== golf)) { _fun00022_ip = 299; continue _fun00021 }
 162:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[report];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.APPLICATION;
            if(!(oscar !== golf)) { _fun00022_ip = 204; continue _fun00021 }
 195:
            _closure1_slot31 = tango;
            _fun00022_ip = 785; continue _fun00021;
 204:
            golf = tango.unshift;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = foxtrot[report];
            verify = romeo.bind(entity)(oscar);
            options = verify.createHeaderResult;
            oscar = 23;
            offset = foxtrot[oscar];
            offset = romeo.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.VwK1lZ;
            oscar = offset.bind(yankee)(oscar);
            oscar = options.bind(verify)(oscar);
            oscar = golf.bind(tango)(oscar);
            _closure1_slot31 = tango;
            _fun00022_ip = 785; continue _fun00021;
 299:
            golf = tango.unshift;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = foxtrot[report];
            verify = romeo.bind(entity)(oscar);
            options = verify.createHeaderResult;
            oscar = 23;
            offset = foxtrot[oscar];
            offset = romeo.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.olADPj;
            oscar = offset.bind(yankee)(oscar);
            oscar = options.bind(verify)(oscar);
            oscar = golf.bind(tango)(oscar);
            _closure1_slot31 = tango;
            _fun00022_ip = 785; continue _fun00021;
 394:
            golf = tango.unshift;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = foxtrot[report];
            verify = romeo.bind(entity)(oscar);
            options = verify.createHeaderResult;
            oscar = 23;
            offset = foxtrot[oscar];
            offset = romeo.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.zUoI5O;
            oscar = offset.bind(yankee)(oscar);
            oscar = options.bind(verify)(oscar);
            oscar = golf.bind(tango)(oscar);
            _closure1_slot31 = tango;
            _fun00022_ip = 785; continue _fun00021;
 489:
            golf = tango.unshift;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = foxtrot[report];
            verify = romeo.bind(entity)(oscar);
            options = verify.createHeaderResult;
            oscar = 23;
            offset = foxtrot[oscar];
            offset = romeo.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.W26k4e;
            oscar = offset.bind(yankee)(oscar);
            oscar = options.bind(verify)(oscar);
            oscar = golf.bind(tango)(oscar);
            _closure1_slot31 = tango;
            _fun00022_ip = 785; continue _fun00021;
 584:
            options = _closure1_slot17;
            golf = options.getGuild;
            verify = _closure1_slot21;
            oscar = verify.getGuildId;
            oscar = oscar.bind(verify)();
            backup = golf.bind(options)(oscar);
            golf = tango.unshift;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[report];
            verify = options.bind(entity)(oscar);
            options = verify.createHeaderResult;
            oscar = null;
            if(!(oscar == backup)) { _fun00022_ip = 704; continue _fun00021 }
 647:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 23;
            offset = foxtrot[oscar];
            offset = romeo.bind(entity)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            oscar = foxtrot[oscar];
            oscar = romeo.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.XFYW1t;
            oscar = offset.bind(yankee)(oscar);
            _fun00022_ip = 771; continue _fun00021;
 704:
            yankee = _closure1_slot0;
            kilo = _closure1_slot2;
            offset = 23;
            romeo = kilo[offset];
            romeo = yankee.bind(entity)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.formatToPlainString;
            offset = kilo[offset];
            offset = yankee.bind(entity)(offset);
            offset = offset.t;
            yankee = offset.FREzQk;
            offset = {};
            backup = backup.name;
            offset['name'] = backup;
            oscar = romeo.bind(foxtrot)(yankee, offset);
 771:
            oscar = options.bind(verify)(oscar);
            oscar = golf.bind(tango)(oscar);
            _closure1_slot31 = tango;
 785:
            tango = _closure1_slot32;
            if(!(zulu === tango)) { _fun00022_ip = 926; continue _fun00021 }
 796:
            oscar = _closure1_slot31;
            tango = _closure1_slot27;
            oscar = oscar[tango];
            tango = null;
            tango = tango != oscar;
            if(!tango) { _fun00022_ip = 855; continue _fun00021 }
 817:
            golf = oscar.type;
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[report];
            oscar = options.bind(entity)(oscar);
            oscar = oscar.AutocompleterResultTypes;
            oscar = oscar.HEADER;
            tango = golf === oscar;
 855:
            if(!tango) { _fun00022_ip = 1027; continue _fun00021 }
 861:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            golf = tango[report];
            verify = oscar.bind(entity)(golf);
            options = verify.findNextSelectedResult;
            tango = tango[report];
            tango = oscar.bind(entity)(tango);
            tango = tango.FindResultDirections;
            golf = tango.DOWN;
            oscar = _closure1_slot27;
            tango = _closure1_slot31;
            tango = options.bind(verify)(golf, oscar, tango);
            _closure1_slot27 = tango;
            _fun00022_ip = 1027; continue _fun00021;
 926:
            _closure1_slot32 = zulu;
            tango = global;
            golf = tango.Math;
            oscar = golf.max;
            tango = zulu.length;
            zulu = _closure1_slot33;
            zulu = oscar.bind(golf)(tango, zulu);
            _closure1_slot33 = zulu;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = zulu[report];
            golf = tango.bind(entity)(oscar);
            oscar = golf.findNextSelectedResult;
            zulu = zulu[report];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.FindResultDirections;
            report = zulu.DOWN;
            tango = _closure1_slot31;
            zulu = -1;
            zulu = oscar.bind(golf)(report, zulu, tango);
            _closure1_slot27 = zulu;
 1027:
            zulu = _closure1_slot36;
            mike = zulu.emitChange;
            mike = mike.bind(zulu)();
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    yankee = function(argFoo) { // Original name: handleQuickSwitcherShow
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tango = entity.query;
            zulu = entity.queryMode;
            report = _closure1_slot21;
            entity = report.getGuildId;
            oscar = entity.bind(report)();
            report = null;
            golf = report != oscar;
            entity = undefined;
            offset = undefined;
            if(!golf) { _fun00024_ip = 47; continue _fun00023 }
 44:
            offset = oscar;
 47:
            oscar = global;
            verify = oscar.Set;
            options = _closure1_slot10;
            golf = options.getId;
            yankee = golf.bind(options)();
            golf = oscar.HermesInternal;
            options = golf.concat;
            golf = 'user:';
            options = options.bind(golf)(yankee);
            golf = new Array(1);
            golf[0] = options;
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            result = options;
            output = golf;
            golf = new result[verify](output, sizing);
            options = golf instanceof Object ? golf : options;
            if(!(report != offset)) { _fun00024_ip = 158; continue _fun00023 }
 126:
            golf = options.add;
            oscar = oscar.HermesInternal;
            verify = oscar.concat;
            oscar = 'guild:';
            oscar = verify.bind(oscar)(offset);
            oscar = golf.bind(options)(oscar);
 158:
            oscar = _closure1_slot25;
            if(!(report == oscar)) { _fun00024_ip = 253; continue _fun00023 }
 166:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            golf = 19;
            golf = offset[golf];
            romeo = verify.bind(entity)(golf);
            yankee = _closure1_slot42;
            offset = _closure1_slot26;
            golf = report != zulu;
            verify = 5;
            if(!golf) { _fun00024_ip = 207; continue _fun00023 }
 204:
            verify = 100;
 207:
            golf = {};
            foxtrot = true;
            golf['frecencyBoosters'] = foxtrot;
            golf['blacklist'] = options;
            options = romeo.prototype;
            options = Object.create(options, {constructor: {value: romeo}});
            result = options;
            output = yankee;
            sizing = offset;
            kilo = verify;
            backup = golf;
            golf = new result[romeo](output, sizing, kilo, backup, foxtrot);
            oscar = golf instanceof Object ? golf : options;
 253:
            var _closure1_slot25 = oscar;
            _closure1_slot32 = report;
            report = tango.length;
            _closure1_slot33 = report;
            _closure1_slot30 = zulu;
            zulu = _closure1_slot25;
            mike = zulu.search;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: handleUserSearchUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            entity = mike.trim;
            zulu = entity.bind(mike)();
            entity = zulu.trim;
            mike = entity.bind(zulu)();
            entity = '';
            if(!(entity === mike)) { _fun00026_ip = 47; continue _fun00025 }
 34:
            mike = _closure1_slot40;
            entity = undefined;
            tango = mike.bind(entity)();
 47:
            verify = _closure1_slot34;
            oscar = tango.length;
            report = verify.length;
            mike = false;
            if(!(oscar === report)) { _fun00026_ip = 139; continue _fun00025 }
 70:
            report = tango.length;
            golf = 0;
            report = golf < report;
            mike = true;
            if(!report) { _fun00026_ip = 139; continue _fun00025 }
 86:
            offset = tango[golf];
            report = verify[golf];
            offset = offset.record;
            offset = offset.id;
            report = report.record;
            report = report.id;
            mike = false;
            if(!(offset === report)) { _fun00026_ip = 139; continue _fun00025 }
 122:
            golf = golf + 1;
            report = tango.length;
            report = golf < report;
            mike = true;
            if(report) { _fun00026_ip = 86; continue _fun00025 }
 139:
            if(mike) { _fun00026_ip = 158; continue _fun00025 }
 142:
            _closure1_slot34 = tango;
            mike = _closure1_slot41;
            entity = undefined;
            entity = mike.bind(entity)(tango, zulu);
 158:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    options = function() { // Original name: handleQuickSwitcherHide
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = null;
            _closure1_slot32 = entity;
            zulu = 0;
            _closure1_slot33 = zulu;
            zulu = new Array(0);
            _closure1_slot34 = zulu;
            zulu = _closure1_slot25;
            if(!(entity != zulu)) { _fun00028_ip = 49; continue _fun00027 }
 31:
            tango = _closure1_slot25;
            zulu = tango.destroy;
            zulu = zulu.bind(tango)();
            _closure1_slot25 = entity;
 49:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    foxtrot = entity.Object;
    offset = foxtrot.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(foxtrot)(zulu, entity, tango);
    tango = 0;
    offset = golf[tango];
    entity = undefined;
    offset = verify.bind(entity)(offset);
    var _closure1_slot3 = offset;
    offset = 1;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot4 = offset;
    offset = 2;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot5 = offset;
    offset = 3;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 4;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 5;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot8 = offset;
    offset = 6;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot9 = offset;
    offset = 7;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot10 = offset;
    offset = 8;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot11 = offset;
    offset = 9;
    foxtrot = golf[offset];
    foxtrot = verify.bind(entity)(foxtrot);
    var _closure1_slot12 = foxtrot;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.DraftType;
    var _closure1_slot13 = offset;
    offset = 10;
    foxtrot = golf[offset];
    foxtrot = verify.bind(entity)(foxtrot);
    var _closure1_slot14 = foxtrot;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot15 = offset;
    offset = 11;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot16 = offset;
    offset = 12;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot17 = offset;
    offset = 13;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot18 = offset;
    offset = 14;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot19 = offset;
    offset = 15;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot20 = offset;
    offset = 16;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot21 = offset;
    offset = 17;
    offset = golf[offset];
    offset = verify.bind(entity)(offset);
    var _closure1_slot22 = offset;
    offset = 18;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    foxtrot = offset.CHANNEL_NOTICE_SHOW_DELAY;
    var _closure1_slot23 = foxtrot;
    offset = offset.Permissions;
    var _closure1_slot24 = offset;
    foxtrot = 19;
    offset = golf[foxtrot];
    offset = oscar.bind(entity)(offset);
    offset = offset.AutocompleterResultTypes;
    backup = offset.USER;
    offset = new Array(7);
    offset[0] = backup;
    backup = golf[foxtrot];
    backup = oscar.bind(entity)(backup);
    backup = backup.AutocompleterResultTypes;
    backup = backup.GROUP_DM;
    offset[1] = backup;
    backup = golf[foxtrot];
    backup = oscar.bind(entity)(backup);
    backup = backup.AutocompleterResultTypes;
    backup = backup.TEXT_CHANNEL;
    offset[2] = backup;
    backup = golf[foxtrot];
    backup = oscar.bind(entity)(backup);
    backup = backup.AutocompleterResultTypes;
    backup = backup.GUILD;
    offset[3] = backup;
    backup = golf[foxtrot];
    backup = oscar.bind(entity)(backup);
    backup = backup.AutocompleterResultTypes;
    backup = backup.APPLICATION;
    offset[4] = backup;
    backup = golf[foxtrot];
    backup = oscar.bind(entity)(backup);
    backup = backup.AutocompleterResultTypes;
    backup = backup.LINK;
    offset[5] = backup;
    foxtrot = golf[foxtrot];
    foxtrot = oscar.bind(entity)(foxtrot);
    foxtrot = foxtrot.AutocompleterResultTypes;
    foxtrot = foxtrot.IN_APP_NAVIGATION;
    offset[6] = foxtrot;
    var _closure1_slot26 = offset;
    var _closure1_slot27 = tango;
    offset = false;
    var _closure1_slot28 = offset;
    var _closure1_slot29 = offset;
    offset = null;
    var _closure1_slot30 = offset;
    foxtrot = new Array(0);
    var _closure1_slot31 = foxtrot;
    var _closure1_slot32 = offset;
    var _closure1_slot33 = tango;
    tango = new Array(0);
    var _closure1_slot34 = tango;
    tango = new Array(0);
    var _closure1_slot35 = tango;
    tango = 27;
    tango = golf[tango];
    tango = verify.bind(entity)(tango);
    offset = tango.PersistedStore;
    tango = function(argFoo) {
        tango = function() { // Original name: QuickSwitcherStoreClass
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot37;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = argFoo;
                oscar = this;
                golf = oscar.waitFor;
                tango = _closure1_slot16;
                mike = _closure1_slot17;
                entity = _closure1_slot11;
                entity = golf.bind(oscar)(tango, mike, entity);
                tango = oscar.syncWith;
                entity = _closure1_slot9;
                mike = new Array(1);
                mike[0] = entity;
                entity = function() {
                    entity = true;
                    return entity;
                };
                entity = tango.bind(oscar)(mike, entity);
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 26;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                oscar = mike.Storage;
                tango = oscar.get;
                mike = 'seenQSTutorial';
                mike = tango.bind(oscar)(mike);
                if(mike) { _fun00030_ip = 116; continue _fun00029 }
 114:
                mike = false;
 116:
                _closure1_slot28 = mike;
                tango = null;
                oscar = tango == report;
                mike = undefined;
                if(oscar) { _fun00030_ip = 137; continue _fun00029 }
 131:
                mike = report.channelHistory;
 137:
                if(!(tango == mike)) { _fun00030_ip = 145; continue _fun00029 }
 141:
                mike = new Array(0);
 145:
                _closure1_slot35 = mike;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            mike = _closure1_slot35;
            entity['channelHistory'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'isOpen';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot25;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getResultTotals';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                report = argFoo;
                var _closure3_slot0 = report;
                entity = _closure1_slot25;
                mike = null;
                golf = mike == entity;
                oscar = 0;
                entity = 0;
                if(golf) { _fun00032_ip = 96; continue _fun00031 }
 29:
                if(!(mike != report)) { _fun00032_ip = 64; continue _fun00031 }
 33:
                mike = _closure1_slot25;
                golf = mike.results;
                report = golf.reduce;
                mike = function(argFoo, argBar) {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        zulu = argFoo;
                        entity = argBar;
                        tango = entity.type;
                        mike = _closure3_slot0;
                        entity = zulu;
                        if(!(tango === mike)) { _fun00034_ip = 32; continue _fun00033 }
 25:
                        mike = 1;
                        entity = zulu + mike;
 32:
                        return entity;
                    }
                };
                mike = report.bind(golf)(mike, oscar);
                _fun00032_ip = 93; continue _fun00031;
 64:
                tango = _closure1_slot25;
                report = tango.results;
                tango = report.reduce;
                zulu = function(argFoo, argBar) {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        zulu = argFoo;
                        entity = argBar;
                        tango = entity.type;
                        report = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        entity = report.bind(entity)(mike);
                        entity = entity.AutocompleterResultTypes;
                        mike = entity.HEADER;
                        entity = zulu;
                        if(!(tango !== mike)) { _fun00036_ip = 62; continue _fun00035 }
 55:
                        mike = 1;
                        entity = zulu + mike;
 62:
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, oscar);
 93:
                entity = mike;
 96:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'channelNoticePredicate';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                entity = global;
                mike = entity.Date;
                entity = mike.now;
                mike = entity.bind(mike)();
                entity = argBar;
                zulu = mike - entity;
                mike = _closure1_slot23;
                mike = zulu >= mike;
                entity = _closure1_slot29;
                if(!entity) { _fun00038_ip = 45; continue _fun00037 }
 42:
                entity = mike;
 45:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getFrequentGuilds';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zulu = _closure1_slot25;
                entity = null;
                zulu = entity != zulu;
                if(!zulu) { _fun00040_ip = 39; continue _fun00039 }
 16:
                report = _closure1_slot25;
                tango = report.queryGuilds;
                zulu = '';
                mike = 100;
                entity = tango.bind(report)(zulu, mike);
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getFrequentGuildsLength';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                zulu = _closure1_slot25;
                entity = null;
                zulu = entity != zulu;
                entity = 0;
                if(!zulu) { _fun00042_ip = 46; continue _fun00041 }
 18:
                report = _closure1_slot25;
                tango = report.queryGuilds;
                zulu = '';
                mike = 100;
                mike = tango.bind(report)(zulu, mike);
                entity = mike.length;
 46:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getChannelHistory';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot35;
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getProps';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = {};
                zulu = _closure1_slot9;
                zulu = zulu.theme;
                entity['theme'] = zulu;
                tango = _closure1_slot25;
                zulu = null;
                tango = zulu != tango;
                zulu = '';
                if(!tango) { _fun00044_ip = 46; continue _fun00043 }
 37:
                tango = _closure1_slot25;
                zulu = tango.query;
 46:
                entity['query'] = zulu;
                zulu = _closure1_slot30;
                entity['queryMode'] = zulu;
                zulu = _closure1_slot31;
                entity['results'] = zulu;
                zulu = _closure1_slot27;
                entity['selectedIndex'] = zulu;
                zulu = _closure1_slot28;
                entity['seenTutorial'] = zulu;
                mike = _closure1_slot33;
                entity['maxQueryLength'] = mike;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[8] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    offset = tango.bind(entity)(offset);
    tango = 'QuickSwitcherStore';
    offset['displayName'] = tango;
    offset['persistKey'] = tango;
    tango = 28;
    tango = golf[tango];
    output = verify.bind(entity)(tango);
    tango = {};
    tango['CONNECTION_OPEN'] = romeo;
    tango['CONNECTION_OPEN_SUPPLEMENTAL'] = romeo;
    tango['QUICKSWITCHER_SHOW'] = yankee;
    tango['SHOW_ACTION_SHEET_QUICK_SWITCHER'] = yankee;
    tango['QUICKSWITCHER_HIDE'] = options;
    tango['OVERLAY_SET_INPUT_LOCKED'] = options;
    tango['HIDE_ACTION_SHEET_QUICK_SWITCHER'] = options;
    options = function(argFoo) { // Original name: handleQuickSwitcherSearch
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            report = entity.query;
            mike = entity.queryMode;
            zulu = _closure1_slot25;
            tango = null;
            if(!(tango != zulu)) { _fun00046_ip = 396; continue _fun00045 }
 30:
            oscar = _closure1_slot21;
            zulu = oscar.getGuildId;
            zulu = zulu.bind(oscar)();
            golf = tango != zulu;
            oscar = null;
            if(!golf) { _fun00046_ip = 56; continue _fun00045 }
 53:
            oscar = zulu;
 56:
            zulu = _closure1_slot30;
            if(!(zulu !== mike)) { _fun00046_ip = 327; continue _fun00045 }
 67:
            options = _closure1_slot25;
            golf = options.setResultTypes;
            if(!(tango == mike)) { _fun00046_ip = 87; continue _fun00045 }
 81:
            zulu = _closure1_slot26;
            _fun00046_ip = 98; continue _fun00045;
 87:
            verify = new Array(1);
            verify[0] = mike;
            zulu = verify;
 98:
            zulu = golf.bind(options)(zulu);
            options = _closure1_slot25;
            golf = options.setLimit;
            verify = tango != mike;
            zulu = 5;
            if(!verify) { _fun00046_ip = 126; continue _fun00045 }
 123:
            zulu = 100;
 126:
            zulu = golf.bind(options)(zulu);
            golf = _closure1_slot21;
            zulu = golf.getGuildId;
            options = zulu.bind(golf)();
            verify = tango != options;
            golf = undefined;
            zulu = undefined;
            if(!verify) { _fun00046_ip = 159; continue _fun00045 }
 156:
            zulu = options;
 159:
            verify = _closure1_slot0;
            options = _closure1_slot2;
            offset = 19;
            options = options[offset];
            options = verify.bind(golf)(options);
            options = options.AutocompleterResultTypes;
            options = options.USER;
            if(!(mike === options)) { _fun00046_ip = 199; continue _fun00045 }
 195:
            if(!(tango == zulu)) { _fun00046_ip = 291; continue _fun00045 }
 199:
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[offset];
            options = verify.bind(golf)(options);
            options = options.AutocompleterResultTypes;
            options = options.VOICE_CHANNEL;
            if(!(mike !== options)) { _fun00046_ip = 264; continue _fun00045 }
 232:
            offset = _closure1_slot25;
            verify = offset.setOptions;
            options = {};
            options['userFilters'] = tango;
            options['voiceChannelGuildFilter'] = golf;
            golf = true;
            golf = verify.bind(offset)(options, golf);
            _fun00046_ip = 327; continue _fun00045;
 264:
            verify = _closure1_slot25;
            options = verify.setOptions;
            golf = {};
            golf['voiceChannelGuildFilter'] = tango;
            tango = true;
            tango = options.bind(verify)(golf, tango);
            _fun00046_ip = 327; continue _fun00045;
 291:
            options = _closure1_slot25;
            golf = options.setOptions;
            tango = {};
            verify = {};
            verify['guild'] = zulu;
            zulu = true;
            verify['friends'] = zulu;
            tango['userFilters'] = verify;
            zulu = golf.bind(options)(tango, zulu);
 327:
            _closure1_slot30 = mike;
            tango = _closure1_slot25;
            zulu = tango.search;
            options = _closure1_slot30;
            golf = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 19;
            mike = mike[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            mike = mike.AutocompleterResultTypes;
            golf = mike.USER;
            mike = undefined;
            if(!(options === golf)) { _fun00046_ip = 388; continue _fun00045 }
 385:
            mike = oscar;
 388:
            mike = zulu.bind(tango)(report, mike);
            return entity;
 396:
            entity = false;
            return entity;
        }
    };
    tango['QUICKSWITCHER_SEARCH'] = options;
    options = function(argFoo) { // Original name: handleQuickSwitcherSelect
        entity = argFoo;
        mike = entity.selectedIndex;
        _closure1_slot27 = mike;
        entity = undefined;
        return entity;
    };
    tango['QUICKSWITCHER_SELECT'] = options;
    options = function() { // Original name: handleQuickSwitcherSwitchTo
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            mike = _closure1_slot28;
            if(mike) { _fun00048_ip = 63; continue _fun00047 }
 10:
            report = true;
            _closure1_slot28 = report;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 26;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            tango = mike.Storage;
            zulu = tango.set;
            mike = 'seenQSTutorial';
            mike = zulu.bind(tango)(mike, report);
            return entity;
 63:
            entity = false;
            return entity;
        }
    };
    tango['QUICKSWITCHER_SWITCH_TO'] = options;
    options = function(argFoo) { // Original name: handleChannelSelect
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            entity = argFoo;
            tango = entity.channelId;
            var _closure2_slot0 = tango;
            entity = null;
            if(!(entity != tango)) { _fun00050_ip = 89; continue _fun00049 }
 20:
            report = _closure1_slot35;
            zulu = report.filter;
            mike = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            zulu = zulu.bind(report)(mike);
            _closure1_slot35 = zulu;
            mike = zulu.unshift;
            mike = mike.bind(zulu)(tango);
            mike = _closure1_slot35;
            zulu = mike.length;
            mike = 4;
            if(!(zulu > mike)) { _fun00050_ip = 85; continue _fun00049 }
 75:
            entity = _closure1_slot35;
            entity['length'] = mike;
 85:
            entity = undefined;
            return entity;
 89:
            entity = false;
            return entity;
        }
    };
    tango['CHANNEL_SELECT'] = options;
    options = offset.prototype;
    options = Object.create(options, {constructor: {value: offset}});
    result = options;
    sizing = tango;
    tango = new result[offset](output, sizing, kilo);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot36 = tango;
    report = 29;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/quickswitcher/QuickSwitcherStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['generateResultFromId'] = mike;
    return entity;
})();