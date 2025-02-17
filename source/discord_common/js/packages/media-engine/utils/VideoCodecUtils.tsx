// discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zulu = argFred;
        oscar = argPlugh;
        entity = function(argFoo, argBar) { // Original name: filterVideoCodecsInternal
            tango = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            zulu = tango.concat;
            entity = _closure1_slot0;
            tango = zulu.bind(tango)(entity);
            entity = new Array(0);
            var _closure2_slot1 = entity;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    var _closure3_slot0 = report;
                    tango = _closure2_slot0;
                    zulu = tango.find;
                    mike = function(argFoo) {
                        entity = _closure3_slot0;
                        mike = entity.name;
                        entity = argFoo;
                        entity = entity.codec;
                        entity = mike === entity;
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != tango)) { _fun00004_ip = 103; continue _fun00003 }
 37:
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    entity = {};
                    oscar = tango.codec;
                    entity['name'] = oscar;
                    oscar = tango.encode;
                    if(!oscar) { _fun00004_ip = 73; continue _fun00003 }
 67:
                    oscar = report.encode;
 73:
                    entity['encode'] = oscar;
                    tango = tango.decode;
                    if(!tango) { _fun00004_ip = 93; continue _fun00003 }
 87:
                    tango = report.decode;
 93:
                    entity['decode'] = tango;
                    entity = mike.bind(zulu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure1_slot1 = entity;
        entity = function(argFoo) { // Original name: codecNameFromPayloadName
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                entity = 'AV1';
                zulu = 'AV1X';
                if(!(zulu !== mike)) { _fun00006_ip = 20; continue _fun00005 }
 17:
                entity = mike;
 20:
                return entity;
            }
        };
        var _closure1_slot2 = entity;
        verify = global;
        options = verify.Object;
        golf = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, tango);
        entity = 0;
        tango = oscar[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        romeo = tango.DARWIN_H265_VERSION;
        tango = tango.ExperimentFlags;
        golf = {'name': 'H265', 'encode': null, 'decode': true};
        tango = verify.window;
        backup = null;
        offset = backup == tango;
        options = undefined;
        if(offset) { _fun00002_ip = 144; continue _fun00001 }
 117:
        tango = tango.DiscordNative;
        offset = backup == tango;
        options = undefined;
        if(offset) { _fun00002_ip = 144; continue _fun00001 }
 132:
        tango = tango.process;
        options = tango.platform;
 144:
        tango = 'darwin';
        tango = tango !== options;
        if(tango) { _fun00002_ip = 287; continue _fun00001 }
 160:
        options = verify.window;
        yankee = backup == options;
        offset = undefined;
        if(yankee) { _fun00002_ip = 202; continue _fun00001 }
 175:
        options = options.DiscordNative;
        yankee = backup == options;
        offset = undefined;
        if(yankee) { _fun00002_ip = 202; continue _fun00001 }
 190:
        options = options.os;
        offset = options.arch;
 202:
        options = 'arm64';
        options = options === offset;
        if(!options) { _fun00002_ip = 284; continue _fun00001 }
 215:
        offset = 1;
        yankee = oscar[offset];
        offset = argBaz;
        yankee = offset.bind(entity)(yankee);
        offset = yankee.satisfies;
        foxtrot = verify.window;
        kilo = backup == foxtrot;
        verify = undefined;
        if(kilo) { _fun00002_ip = 278; continue _fun00001 }
 251:
        foxtrot = foxtrot.DiscordNative;
        backup = backup == foxtrot;
        verify = undefined;
        if(backup) { _fun00002_ip = 278; continue _fun00001 }
 266:
        foxtrot = foxtrot.os;
        verify = foxtrot.release;
 278:
        options = offset.bind(yankee)(verify, romeo);
 284:
        tango = options;
 287:
        golf['encode'] = tango;
        tango = new Array(4);
        tango[0] = golf;
        golf = {'name': 'H264', 'encode': true, 'decode': true};
        tango[1] = golf;
        golf = {'name': 'VP8', 'encode': true, 'decode': true};
        tango[2] = golf;
        golf = {'name': 'VP9', 'encode': true, 'decode': true};
        tango[3] = golf;
        var _closure1_slot0 = tango;
        tango = 2;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = '../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx';
        tango = report.bind(oscar)(tango);
        tango = function() { // Original name: getExperimentCodecs
            entity = new Array(0);
            return entity;
        };
        zulu['getExperimentCodecs'] = tango;
        tango = function(argFoo, argBar) { // Original name: filterVideoCodecs
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = argFoo;
                tango = _closure1_slot1;
                zulu = 'string';
                mike = typeof oscar;
                if(!(zulu !== mike)) { _fun00008_ip = 40; continue _fun00007 }
 23:
                zulu = oscar.map;
                mike = function(argFoo) {
                    entity = {'codec': null, 'encode': true, 'decode': true};
                    tango = _closure1_slot2;
                    zulu = undefined;
                    mike = argFoo;
                    mike = tango.bind(zulu)(mike);
                    entity['codec'] = mike;
                    return entity;
                };
                zulu = zulu.bind(oscar)(mike);
                _fun00008_ip = 74; continue _fun00007;
 40:
                mike = global;
                report = mike.JSON;
                mike = report.parse;
                report = mike.bind(report)(oscar);
                mike = report.map;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    report = _closure1_slot2;
                    tango = mike.codec;
                    zulu = undefined;
                    zulu = report.bind(zulu)(tango);
                    entity['codec'] = zulu;
                    zulu = mike.encode;
                    entity['encode'] = zulu;
                    mike = mike.decode;
                    entity['decode'] = mike;
                    return entity;
                };
                zulu = mike.bind(report)(entity);
 74:
                mike = undefined;
                entity = argBar;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            }
        };
        zulu['filterVideoCodecs'] = tango;
        mike = function(argFoo) { // Original name: codecNameToPayloadName
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = argFoo;
                entity = 'AV1X';
                zulu = 'AV1';
                if(!(zulu !== mike)) { _fun00010_ip = 20; continue _fun00009 }
 17:
                entity = mike;
 20:
                return entity;
            }
        };
        zulu['codecNameToPayloadName'] = mike;
        return entity;
    }
})();