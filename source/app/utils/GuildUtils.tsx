// app/utils/GuildUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    yankee = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = yankee;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: requestMembersDebounced
        _fun61131: for(var _fun61131_ip = 0; ; ) switch(_fun61131_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            entity = argBaz;
            var _closure2_slot2 = entity;
            tango = _closure1_slot4;
            entity = null;
            if(!(entity != tango)) { _fun61131_ip = 55; continue _fun61131 }
 36:
            entity = global;
            report = entity.clearTimeout;
            tango = _closure1_slot4;
            entity = undefined;
            entity = report.bind(entity)(tango);
 55:
            entity = global;
            report = entity.setTimeout;
            entity = undefined;
            tango = function() {
                _fun61132: for(var _fun61132_ip = 0; ; ) switch(_fun61132_ip) {
 0:
                    report = new Array(0);
                    var _closure3_slot0 = report;
                    oscar = function(argFoo) { // Original name: pushGuild
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    var _closure3_slot1 = oscar;
                    tango = _closure2_slot0;
                    zulu = null;
                    if(!(zulu != tango)) { _fun61132_ip = 112; continue _fun61132 }
 32:
                    tango = global;
                    options = tango.Array;
                    golf = options.isArray;
                    tango = _closure2_slot0;
                    tango = golf.bind(options)(tango);
                    if(tango) { _fun61132_ip = 91; continue _fun61132 }
 57:
                    options = _closure1_slot5;
                    golf = options.getGuild;
                    tango = _closure2_slot0;
                    tango = golf.bind(options)(tango);
                    if(!(zulu != tango)) { _fun61132_ip = 162; continue _fun61132 }
 82:
                    zulu = undefined;
                    zulu = oscar.bind(zulu)(tango);
                    _fun61132_ip = 162; continue _fun61132;
 91:
                    tango = _closure2_slot0;
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        _fun61134: for(var _fun61134_ip = 0; ; ) switch(_fun61134_ip) {
 0:
                            zulu = _closure1_slot5;
                            mike = zulu.getGuild;
                            entity = argFoo;
                            zulu = mike.bind(zulu)(entity);
                            entity = null;
                            if(!(entity != zulu)) { _fun61134_ip = 40; continue _fun61134 }
 26:
                            mike = _closure3_slot1;
                            entity = undefined;
                            entity = mike.bind(entity)(zulu);
 40:
                            entity = undefined;
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    _fun61132_ip = 162; continue _fun61132;
 112:
                    golf = _closure1_slot1;
                    tango = _closure1_slot3;
                    zulu = 4;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = golf.bind(zulu)(tango);
                    zulu = tango.forEach;
                    golf = _closure1_slot5;
                    mike = golf.getGuilds;
                    mike = mike.bind(golf)();
                    mike = zulu.bind(tango)(mike, oscar);
 162:
                    zulu = report.length;
                    mike = 0;
                    if(!(zulu > mike)) { _fun61132_ip = 229; continue _fun61132 }
 173:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.requestMembers;
                    oscar = _closure2_slot1;
                    mike = oscar.toLocaleLowerCase;
                    mike = mike.bind(oscar)();
                    entity = _closure2_slot2;
                    entity = zulu.bind(tango)(report, mike, entity);
 229:
                    entity = undefined;
                    return entity;
                }
            };
            mike = 200;
            mike = report.bind(entity)(tango, mike);
            var _closure1_slot4 = mike;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: getCachedResults
        _fun61135: for(var _fun61135_ip = 0; ; ) switch(_fun61135_ip) {
 0:
            entity = argFoo;
            zulu = null;
            mike = zulu != entity;
            oscar = '';
            report = oscar;
            if(!mike) { _fun61135_ip = 22; continue _fun61135 }
 19:
            report = entity;
 22:
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            mike = ':';
            entity = argBar;
            report = tango.bind(oscar)(report, mike, entity);
            tango = _closure1_slot7;
            entity = tango.get;
            entity = entity.bind(tango)(report);
            if(!(zulu == entity)) { _fun61135_ip = 91; continue _fun61135 }
 70:
            tango = _closure1_slot7;
            zulu = tango.set;
            mike = true;
            mike = zulu.bind(tango)(report, mike);
            mike = undefined;
            return mike;
 91:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    mike = function(argFoo) { // Original name: getGuildNameSuggestion
        _fun61136: for(var _fun61136_ip = 0; ; ) switch(_fun61136_ip) {
 0:
            golf = argFoo;
            zulu = _closure1_slot6;
            entity = zulu.getCurrentUser;
            tango = entity.bind(zulu)();
            zulu = _closure1_slot2;
            report = _closure1_slot3;
            entity = 6;
            entity = report[entity];
            oscar = undefined;
            zulu = zulu.bind(oscar)(entity);
            entity = zulu.getName;
            offset = entity.bind(zulu)(tango);
            options = null;
            zulu = options == offset;
            tango = '';
            entity = tango;
            if(zulu) { _fun61136_ip = 177; continue _fun61136 }
 68:
            zulu = offset.length;
            verify = 0;
            entity = tango;
            if(!(verify !== zulu)) { _fun61136_ip = 177; continue _fun61136 }
 82:
            zulu = _closure1_slot0;
            yankee = _closure1_slot3;
            mike = 7;
            tango = yankee[mike];
            tango = zulu.bind(oscar)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = yankee[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.t;
            zulu = mike.Y6Qfjo;
            mike = {};
            oscar = offset;
            if(!(options != golf)) { _fun61136_ip = 167; continue _fun61136 }
 141:
            golf = golf.truncateUsername;
            oscar = offset;
            if(!golf) { _fun61136_ip = 167; continue _fun61136 }
 153:
            options = offset.slice;
            golf = 20;
            oscar = options.bind(offset)(verify, golf);
 167:
            mike['username'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 177:
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    offset = 1;
    tango = golf[offset];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 2;
    tango = golf[tango];
    verify = yankee.bind(entity)(tango);
    tango = {};
    options = 3;
    options = golf[options];
    options = yankee.bind(entity)(options);
    options = options.Millis;
    options = options.MINUTE;
    options = offset * options;
    tango['maxAge'] = options;
    options = verify.prototype;
    options = Object.create(options, {constructor: {value: verify}});
    kilo = options;
    backup = tango;
    tango = new kilo[verify](backup, foxtrot);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot7 = tango;
    tango = {};
    tango['getGuildNameSuggestion'] = mike;
    report = function(argFoo, argBar) { // Original name: requestMembers
        _fun61137: for(var _fun61137_ip = 0; ; ) switch(_fun61137_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = arguments[2];
            var _closure2_slot0 = report;
            entity = undefined;
            if(!(tango === entity)) { _fun61137_ip = 24; continue _fun61137 }
 21:
            tango = 10;
 24:
            var _closure2_slot1 = entity;
            mike = global;
            zulu = mike.Array;
            mike = zulu.isArray;
            golf = mike.bind(zulu)(oscar);
            zulu = new Array(0);
            _closure2_slot1 = zulu;
            if(golf) { _fun61137_ip = 85; continue _fun61137 }
 57:
            mike = _closure1_slot9;
            verify = mike.bind(entity)(oscar, report);
            mike = null;
            verify = mike == verify;
            mike = false;
            if(!verify) { _fun61137_ip = 102; continue _fun61137 }
 81:
            mike = true;
            _fun61137_ip = 102; continue _fun61137;
 85:
            verify = oscar.forEach;
            options = function(argFoo) {
                _fun61138: for(var _fun61138_ip = 0; ; ) switch(_fun61138_ip) {
 0:
                    tango = argFoo;
                    report = _closure1_slot9;
                    zulu = _closure2_slot0;
                    entity = undefined;
                    report = report.bind(entity)(tango, zulu);
                    zulu = null;
                    if(!(zulu == report)) { _fun61138_ip = 45; continue _fun61138 }
 31:
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    mike = mike.bind(zulu)(tango);
 45:
                    return entity;
                }
            };
            options = verify.bind(oscar)(options);
            mike = false;
 102:
            verify = zulu.length;
            options = 0;
            if(!(verify > options)) { _fun61137_ip = 116; continue _fun61137 }
 113:
            if(golf) { _fun61137_ip = 135; continue _fun61137 }
 116:
            if(!mike) { _fun61137_ip = 149; continue _fun61137 }
 119:
            mike = _closure1_slot8;
            mike = mike.bind(entity)(oscar, report, tango);
            _fun61137_ip = 149; continue _fun61137;
 135:
            mike = _closure1_slot8;
            mike = mike.bind(entity)(zulu, report, tango);
 149:
            return entity;
        }
    };
    tango['requestMembers'] = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/GuildUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['getGuildNameSuggestion'] = mike;
    return entity;
})();