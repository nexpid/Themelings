// app/modules/guild_onboarding/native/GuildOnboardingManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            entity = _closure1_slot16;
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
    var _closure1_slot15 = entity;
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
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot12 = tango;
    tango = null;
    var _closure1_slot13 = tango;
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: GuildOnboardingManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot15;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = {};
            tango = function(argFoo) { // Original name: CHANNEL_SELECT
                zulu = _closure3_slot0;
                mike = zulu.handleChannelSelect;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['CHANNEL_SELECT'] = tango;
            tango = function(argFoo) { // Original name: GUILD_DELETE
                zulu = _closure3_slot0;
                mike = zulu.handleGuildDelete;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['GUILD_DELETE'] = tango;
            tango = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['POST_CONNECTION_OPEN'] = tango;
            entity['actions'] = zulu;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure1_slot13;
                    zulu = null;
                    if(!(zulu == tango)) { _fun00006_ip = 27; continue _fun00005 }
 13:
                    report = _closure1_slot10;
                    mike = report.getGuildId;
                    tango = mike.bind(report)();
 27:
                    report = zulu != tango;
                    mike = null;
                    if(!report) { _fun00006_ip = 39; continue _fun00005 }
 36:
                    mike = tango;
 39:
                    _closure1_slot13 = mike;
                    if(!(zulu != mike)) { _fun00006_ip = 69; continue _fun00005 }
 47:
                    zulu = _closure3_slot0;
                    mike = zulu._openOnboardingIfIncomplete;
                    entity = _closure1_slot13;
                    entity = mike.bind(zulu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleConnectionOpen'] = zulu;
            zulu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    tango = entity.guildId;
                    report = entity.channelId;
                    mike = _closure1_slot13;
                    mike = mike === tango;
                    if(!mike) { _fun00008_ip = 35; continue _fun00007 }
 27:
                    zulu = _closure1_slot14;
                    mike = zulu === report;
 35:
                    if(mike) { _fun00008_ip = 98; continue _fun00007 }
 38:
                    zulu = null;
                    oscar = zulu != report;
                    mike = null;
                    if(!oscar) { _fun00008_ip = 52; continue _fun00007 }
 49:
                    mike = report;
 52:
                    _closure1_slot14 = mike;
                    report = zulu != tango;
                    mike = null;
                    if(!report) { _fun00008_ip = 68; continue _fun00007 }
 65:
                    mike = tango;
 68:
                    _closure1_slot13 = mike;
                    if(!(zulu != mike)) { _fun00008_ip = 98; continue _fun00007 }
 76:
                    zulu = _closure3_slot0;
                    mike = zulu._openOnboardingIfIncomplete;
                    entity = _closure1_slot13;
                    entity = mike.bind(zulu)(entity);
 98:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelSelect'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.guild;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.clearGuildOnboardingPromise;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['handleGuildDelete'] = zulu;
            mike = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot9;
                    mike = zulu.getGuild;
                    oscar = mike.bind(zulu)(tango);
                    report = null;
                    if(!(report != oscar)) { _fun00010_ip = 242; continue _fun00009 }
 29:
                    zulu = oscar.hasFeature;
                    mike = _closure1_slot11;
                    mike = mike.GUILD_ONBOARDING;
                    mike = zulu.bind(oscar)(mike);
                    if(!mike) { _fun00010_ip = 242; continue _fun00009 }
 56:
                    zulu = _closure1_slot8;
                    mike = zulu.getSelfMember;
                    zulu = mike.bind(zulu)(tango);
                    mike = report != zulu;
                    if(!mike) { _fun00010_ip = 142; continue _fun00009 }
 78:
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 11;
                    golf = golf[oscar];
                    oscar = undefined;
                    verify = options.bind(oscar)(golf);
                    options = verify.hasFlag;
                    oscar = zulu.flags;
                    offset = report != oscar;
                    golf = 0;
                    if(!offset) { _fun00010_ip = 123; continue _fun00009 }
 120:
                    golf = oscar;
 123:
                    oscar = _closure1_slot12;
                    oscar = oscar.COMPLETED_ONBOARDING;
                    oscar = options.bind(verify)(golf, oscar);
                    mike = !oscar;
 142:
                    if(!mike) { _fun00010_ip = 206; continue _fun00009 }
 145:
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    oscar = 11;
                    golf = golf[oscar];
                    oscar = undefined;
                    golf = options.bind(oscar)(golf);
                    oscar = golf.hasFlag;
                    zulu = zulu.flags;
                    options = report != zulu;
                    report = 0;
                    if(!options) { _fun00010_ip = 190; continue _fun00009 }
 187:
                    report = zulu;
 190:
                    zulu = _closure1_slot12;
                    zulu = zulu.STARTED_ONBOARDING;
                    mike = oscar.bind(golf)(report, zulu);
 206:
                    if(!mike) { _fun00010_ip = 242; continue _fun00009 }
 209:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 10;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    entity['guildId'] = tango;
                    entity = mike.bind(zulu)(entity);
 242:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_openOnboardingIfIncomplete'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/native/GuildOnboardingManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();