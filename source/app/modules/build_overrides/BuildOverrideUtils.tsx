// app/modules/build_overrides/BuildOverrideUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        verify = argBar;
        zulu = argFred;
        offset = argPlugh;
        var _closure1_slot0 = verify;
        entity = argBaz;
        var _closure1_slot1 = entity;
        entity = argCorge;
        var _closure1_slot2 = entity;
        var _closure1_slot3 = offset;
        oscar = function(argFoo) { // Original name: getAPIEndpoint
            entity = global;
            mike = entity.location;
            offset = mike.protocol;
            mike = entity.location;
            options = mike.host;
            entity = entity.HermesInternal;
            tango = entity.concat;
            yankee = '';
            verify = '//';
            golf = argFoo;
            entity = yankee[tango](offset, verify, options, golf, oscar);
            return entity;
        };
        var _closure1_slot10 = oscar;
        report = function(argFoo) { // Original name: isManualBuildOverrideLink
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun00004_ip = 29; continue _fun00003 }
 12:
                zulu = _closure1_slot7;
                mike = zulu.test;
                entity = mike.bind(zulu)(tango);
 29:
                return entity;
            }
        };
        var _closure1_slot11 = report;
        tango = function(argFoo) { // Original name: manualOverrideLinkMeta
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                mike = zulu.match;
                entity = _closure1_slot7;
                golf = mike.bind(zulu)(entity);
                report = null;
                mike = report == golf;
                entity = null;
                if(mike) { _fun00006_ip = 163; continue _fun00005 }
 35:
                zulu = golf.length;
                mike = 2;
                entity = null;
                if(!(mike === zulu)) { _fun00006_ip = 163; continue _fun00005 }
 49:
                mike = {};
                zulu = {};
                oscar = _closure1_slot0;
                report = _closure1_slot3;
                tango = 3;
                report = report[tango];
                tango = undefined;
                report = oscar.bind(tango)(report);
                tango = report.getNativePlatform;
                oscar = tango.bind(report)();
                tango = global;
                tango = tango.HermesInternal;
                report = tango.concat;
                tango = 'discord_';
                report = report.bind(tango)(oscar);
                tango = {};
                oscar = 'branch';
                tango['type'] = oscar;
                oscar = 1;
                oscar = golf[oscar];
                tango['id'] = oscar;
                zulu[report] = tango;
                mike['targetBuildOverride'] = zulu;
                zulu = new Array(0);
                mike['validForUserIds'] = zulu;
                zulu = 'Mon, 1 Jan 2038 00:00:00 GMT';
                mike['expiresAt'] = zulu;
                entity = mike;
 163:
                return entity;
            }
        };
        var _closure1_slot12 = tango;
        options = global;
        romeo = options.Object;
        yankee = romeo.defineProperty;
        golf = {};
        entity = true;
        golf['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeo)(zulu, entity, golf);
        romeo = 0;
        golf = offset[romeo];
        entity = undefined;
        golf = verify.bind(entity)(golf);
        golf = golf.BUILD_OVERRIDE_COOKIE_NAME;
        var _closure1_slot4 = golf;
        golf = 1;
        golf = offset[golf];
        golf = verify.bind(entity)(golf);
        golf = golf.PRIMARY_DOMAIN;
        golf = 2;
        golf = offset[golf];
        yankee = verify.bind(entity)(golf);
        golf = yankee.getConstants;
        yankee = golf.bind(yankee)();
        golf = 3;
        foxtrot = offset[golf];
        backup = verify.bind(entity)(foxtrot);
        foxtrot = backup.isAndroid;
        foxtrot = foxtrot.bind(backup)();
        if(foxtrot) { _fun00002_ip = 211; continue _fun00001 }
 179:
        golf = offset[golf];
        foxtrot = verify.bind(entity)(golf);
        golf = foxtrot.isIOS;
        foxtrot = golf.bind(foxtrot)();
        golf = undefined;
        if(!foxtrot) { _fun00002_ip = 209; continue _fun00001 }
 203:
        golf = yankee.Version;
 209:
        _fun00002_ip = 237; continue _fun00001;
 211:
        backup = yankee.Version;
        foxtrot = backup.split;
        yankee = ' - ';
        yankee = foxtrot.bind(backup)(yankee);
        golf = yankee[romeo];
 237:
        var _closure1_slot5 = golf;
        foxtrot = options.RegExp;
        yankee = foxtrot.prototype;
        romeo = Object.create(yankee, {constructor: {value: foxtrot}});
        output = '^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$';
        backup = 'i';
        result = romeo;
        sizing = backup;
        yankee = new result[foxtrot](output, sizing, kilo);
        yankee = yankee instanceof Object ? yankee : romeo;
        var _closure1_slot6 = yankee;
        foxtrot = options.RegExp;
        yankee = foxtrot.prototype;
        romeo = Object.create(yankee, {constructor: {value: foxtrot}});
        output = '^dev://branch/([\\w-./]+)$';
        result = romeo;
        yankee = new result[foxtrot](output, sizing, kilo);
        yankee = yankee instanceof Object ? yankee : romeo;
        var _closure1_slot7 = yankee;
        foxtrot = options.Set;
        yankee = foxtrot.prototype;
        romeo = Object.create(yankee, {constructor: {value: foxtrot}});
        output = ['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com'];
        result = romeo;
        yankee = new result[foxtrot](output, sizing);
        yankee = yankee instanceof Object ? yankee : romeo;
        var _closure1_slot8 = yankee;
        romeo = options.Set;
        options = romeo.prototype;
        yankee = Object.create(options, {constructor: {value: romeo}});
        output = ['/__development/link', '/__development/link/'];
        result = yankee;
        options = new result[romeo](output, sizing);
        options = options instanceof Object ? options : yankee;
        var _closure1_slot9 = options;
        options = 8;
        options = offset[options];
        offset = verify.bind(entity)(options);
        verify = offset.fileFinishedImporting;
        options = 'modules/build_overrides/BuildOverrideUtils.tsx';
        options = verify.bind(offset)(options);
        zulu['APP_VERSION'] = golf;
        zulu['getAPIEndpoint'] = oscar;
        oscar = function() { // Original name: getBuildOverride
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot1;
                tango = _closure1_slot3;
                mike = 4;
                mike = tango[mike];
                verify = undefined;
                tango = zulu.bind(verify)(mike);
                zulu = tango.safeParseWithQuery;
                report = _closure1_slot10;
                mike = '/__development/build_overrides';
                mike = report.bind(verify)(mike);
                options = zulu.bind(tango)(mike);
                tango = null;
                if(!(tango != options)) { _fun00008_ip = 190; continue _fun00007 }
 62:
                options['search'] = tango;
                mike = _closure1_slot5;
                if(!mike) { _fun00008_ip = 90; continue _fun00007 }
 75:
                zulu = options.query;
                mike = _closure1_slot5;
                zulu['version'] = mike;
 90:
                zulu = _closure1_slot0;
                offset = _closure1_slot3;
                mike = 5;
                mike = offset[mike];
                mike = zulu.bind(verify)(mike);
                report = mike.HTTP;
                zulu = report.get;
                mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                golf = _closure1_slot2;
                oscar = 6;
                oscar = offset[oscar];
                golf = golf.bind(verify)(oscar);
                oscar = golf.format;
                oscar = oscar.bind(golf)(options);
                mike['url'] = oscar;
                report = zulu.bind(report)(mike);
                zulu = report.then;
                mike = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        entity = entity.body;
                        if(entity) { _fun00010_ip = 13; continue _fun00009 }
 11:
                        entity = null;
 13:
                        return entity;
                    }
                };
                entity = function() {
                    entity = null;
                    return entity;
                };
                entity = zulu.bind(report)(mike, entity);
                _fun00008_ip = 209; continue _fun00007;
 190:
                mike = global;
                zulu = mike.Promise;
                mike = zulu.resolve;
                entity = mike.bind(zulu)(tango);
 209:
                return entity;
            }
        };
        zulu['getBuildOverride'] = oscar;
        oscar = function(argFoo) { // Original name: getBuildOverrideMeta
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zulu = _closure1_slot11;
                tango = undefined;
                zulu = zulu.bind(tango)(report);
                if(zulu) { _fun00012_ip = 254; continue _fun00011 }
 25:
                oscar = _closure1_slot1;
                golf = _closure1_slot3;
                zulu = 4;
                zulu = golf[zulu];
                oscar = oscar.bind(tango)(zulu);
                zulu = oscar.safeParseWithQuery;
                yankee = zulu.bind(oscar)(report);
                golf = null;
                if(!(golf != yankee)) { _fun00012_ip = 233; continue _fun00011 }
 65:
                yankee['search'] = golf;
                oscar = yankee.query;
                zulu = 'true';
                oscar['meta'] = zulu;
                zulu = _closure1_slot5;
                if(!zulu) { _fun00012_ip = 108; continue _fun00011 }
 93:
                oscar = yankee.query;
                zulu = _closure1_slot5;
                oscar['version'] = zulu;
 108:
                zulu = global;
                zulu = zulu.window;
                zulu = zulu.location;
                zulu = zulu.host;
                yankee['host'] = zulu;
                oscar = _closure1_slot0;
                romeo = _closure1_slot3;
                zulu = 5;
                zulu = romeo[zulu];
                zulu = oscar.bind(tango)(zulu);
                options = zulu.HTTP;
                oscar = options.get;
                zulu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                offset = _closure1_slot2;
                verify = 6;
                verify = romeo[verify];
                offset = offset.bind(tango)(verify);
                verify = offset.format;
                verify = verify.bind(offset)(yankee);
                zulu['url'] = verify;
                options = oscar.bind(options)(zulu);
                oscar = options.then;
                zulu = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        entity = argFoo;
                        entity = entity.body;
                        if(entity) { _fun00014_ip = 13; continue _fun00013 }
 11:
                        entity = null;
 13:
                        return entity;
                    }
                };
                mike = function() {
                    entity = null;
                    return entity;
                };
                mike = oscar.bind(options)(zulu, mike);
                _fun00012_ip = 252; continue _fun00011;
 233:
                zulu = global;
                oscar = zulu.Promise;
                zulu = oscar.resolve;
                mike = zulu.bind(oscar)(golf);
 252:
                return mike;
 254:
                mike = global;
                zulu = mike.Promise;
                mike = zulu.resolve;
                entity = _closure1_slot12;
                entity = entity.bind(tango)(report);
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        zulu['getBuildOverrideMeta'] = oscar;
        oscar = function() { // Original name: probablyHasBuildOverride
            entity = global;
            mike = entity.window;
            mike = mike.document;
            zulu = mike.cookie;
            mike = zulu.indexOf;
            oscar = _closure1_slot4;
            entity = entity.HermesInternal;
            report = entity.concat;
            tango = '';
            entity = '=';
            entity = report.bind(tango)(oscar, entity);
            mike = mike.bind(zulu)(entity);
            entity = -1;
            entity = entity !== mike;
            return entity;
        };
        zulu['probablyHasBuildOverride'] = oscar;
        oscar = function() { // Original name: getBuildOverrideExperiments
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                golf = undefined;
                mike = undefined;
                entity = undefined;
 6: // try_start_0
                report = _closure1_slot1;
                oscar = _closure1_slot3;
                tango = 7;
                tango = oscar[tango];
                options = report.bind(golf)(tango);
                report = options.parse;
                oscar = global;
                tango = oscar.window;
                tango = tango.document;
                tango = tango.cookie;
                tango = report.bind(options)(tango);
                zulu = _closure1_slot4;
                tango = tango[zulu];
                entity = tango;
                zulu = null;
                if(!(zulu != tango)) { _fun00016_ip = 168; continue _fun00015 }
 77:
                report = oscar.JSON;
                tango = report.parse;
                oscar = oscar.atob;
                verify = entity;
                options = verify.substring;
                offset = verify.indexOf;
                entity = '.';
                offset = offset.bind(verify)(entity);
                entity = 1;
                entity = offset + entity;
                entity = options.bind(verify)(entity);
                entity = oscar.bind(golf)(entity);
                entity = tango.bind(report)(entity);
                entity = entity.$meta;
                entity = entity.experiments;
                mike = entity;
                if(!(zulu == entity)) { _fun00016_ip = 163; continue _fun00015 }
 159:
                entity = {};
                _fun00016_ip = 166; continue _fun00015;
 163:
                entity = mike;
 166:
                _fun00016_ip = 170; continue _fun00015;
 168:
                entity = {};
 170: // try_end0
                return entity;
 172: // catch_target0
                CatchBlockStart(arg_register=0);
                entity = {};
                return entity;
            }
        };
        zulu['getBuildOverrideExperiments'] = oscar;
        oscar = function(argFoo) { // Original name: isBuildOverrideLink
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tango = argFoo;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun00018_ip = 29; continue _fun00017 }
 12:
                zulu = _closure1_slot6;
                mike = zulu.test;
                entity = mike.bind(zulu)(tango);
 29:
                return entity;
            }
        };
        zulu['isBuildOverrideLink'] = oscar;
        zulu['isManualBuildOverrideLink'] = report;
        zulu['manualOverrideLinkMeta'] = tango;
        mike = function(argFoo) { // Original name: validateURL
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                mike = argFoo;
                entity = _closure1_slot11;
                golf = undefined;
                entity = entity.bind(golf)(mike);
                if(entity) { _fun00020_ip = 222; continue _fun00019 }
 23:
                zulu = _closure1_slot1;
                report = _closure1_slot3;
                entity = 4;
                entity = report[entity];
                zulu = zulu.bind(golf)(entity);
                entity = zulu.safeParseWithQuery;
                oscar = entity.bind(zulu)(mike);
                entity = null;
                if(!(entity != oscar)) { _fun00020_ip = 220; continue _fun00019 }
 63:
                options = _closure1_slot8;
                report = options.has;
                zulu = oscar.hostname;
                zulu = report.bind(options)(zulu);
                if(!zulu) { _fun00020_ip = 125; continue _fun00019 }
 86:
                zulu = oscar.query;
                yankee = 's';
                zulu = yankee in zulu;
                if(!zulu) { _fun00020_ip = 125; continue _fun00019 }
 102:
                options = _closure1_slot9;
                report = options.has;
                zulu = oscar.pathname;
                zulu = report.bind(options)(zulu);
                if(zulu) { _fun00020_ip = 127; continue _fun00019 }
 125:
                return entity;
 127:
                verify = oscar.query;
                for(zulu in verify)
 140:
                {
 149:
                    foxtrot = zulu;
                    if(yankee === foxtrot) { _fun00020_ip = 140; continue _fun00019 }
 156:
                    romeo = oscar.query;
                    romeo = delete romeo[foxtrot];
                    _fun00020_ip = 140; continue _fun00019;
                }
 167:
                zulu = {};
                report = oscar.query;
                report = report.s;
                zulu['payload'] = report;
                report = _closure1_slot2;
                options = _closure1_slot3;
                tango = 6;
                tango = options[tango];
                report = report.bind(golf)(tango);
                tango = report.format;
                tango = tango.bind(report)(oscar);
                zulu['url'] = tango;
                return zulu;
 220:
                return entity;
 222:
                entity = {};
                zulu = null;
                entity['payload'] = zulu;
                entity['url'] = mike;
                return entity;
            }
        };
        zulu['validateURL'] = mike;
        return entity;
    }
})();