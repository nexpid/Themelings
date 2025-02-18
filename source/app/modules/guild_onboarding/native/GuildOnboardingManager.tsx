// app/modules/guild_onboarding/native/GuildOnboardingManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot16;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildMemberFlags;
    var _closure1_slot12 = tangon;
    tangon = null;
    var _closure1_slot13 = tangon;
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: GuildOnboardingManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            zuuluu = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot15;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            zuuluu = {};
            tangon = function(argFoo) { // Original name: CHANNEL_SELECT
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleChannelSelect;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['CHANNEL_SELECT'] = tangon;
            tangon = function(argFoo) { // Original name: GUILD_DELETE
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleGuildDelete;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['GUILD_DELETE'] = tangon;
            tangon = function() { // Original name: POST_CONNECTION_OPEN
                michal = _closure3_slot0;
                entity = michal.handleConnectionOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu['POST_CONNECTION_OPEN'] = tangon;
            entity['actions'] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot13;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00006_ip = 27; continue _fun00005 }
 13:
                    report = _closure1_slot10;
                    michal = report.getGuildId;
                    tangon = michal.bind(report)();
 27:
                    report = zuuluu != tangon;
                    michal = null;
                    if(!report) { _fun00006_ip = 39; continue _fun00005 }
 36:
                    michal = tangon;
 39:
                    _closure1_slot13 = michal;
                    if(!(zuuluu != michal)) { _fun00006_ip = 69; continue _fun00005 }
 47:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu._openOnboardingIfIncomplete;
                    entity = _closure1_slot13;
                    entity = michal.bind(zuuluu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleConnectionOpen'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.guildId;
                    report = entity.channelId;
                    michal = _closure1_slot13;
                    michal = michal === tangon;
                    if(!michal) { _fun00008_ip = 35; continue _fun00007 }
 27:
                    zuuluu = _closure1_slot14;
                    michal = zuuluu === report;
 35:
                    if(michal) { _fun00008_ip = 98; continue _fun00007 }
 38:
                    zuuluu = null;
                    oscard = zuuluu != report;
                    michal = null;
                    if(!oscard) { _fun00008_ip = 52; continue _fun00007 }
 49:
                    michal = report;
 52:
                    _closure1_slot14 = michal;
                    report = zuuluu != tangon;
                    michal = null;
                    if(!report) { _fun00008_ip = 68; continue _fun00007 }
 65:
                    michal = tangon;
 68:
                    _closure1_slot13 = michal;
                    if(!(zuuluu != michal)) { _fun00008_ip = 98; continue _fun00007 }
 76:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu._openOnboardingIfIncomplete;
                    entity = _closure1_slot13;
                    entity = michal.bind(zuuluu)(entity);
 98:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleChannelSelect'] = zuuluu;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.guild;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 10;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.clearGuildOnboardingPromise;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['handleGuildDelete'] = zuuluu;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.getGuild;
                    oscard = michal.bind(zuuluu)(tangon);
                    report = null;
                    if(!(report != oscard)) { _fun00010_ip = 242; continue _fun00009 }
 29:
                    zuuluu = oscard.hasFeature;
                    michal = _closure1_slot11;
                    michal = michal.GUILD_ONBOARDING;
                    michal = zuuluu.bind(oscard)(michal);
                    if(!michal) { _fun00010_ip = 242; continue _fun00009 }
 56:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getSelfMember;
                    zuuluu = michal.bind(zuuluu)(tangon);
                    michal = report != zuuluu;
                    if(!michal) { _fun00010_ip = 142; continue _fun00009 }
 78:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 11;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    verify = option.bind(oscard)(golfie);
                    option = verify.hasFlag;
                    oscard = zuuluu.flags;
                    offset = report != oscard;
                    golfie = 0;
                    if(!offset) { _fun00010_ip = 123; continue _fun00009 }
 120:
                    golfie = oscard;
 123:
                    oscard = _closure1_slot12;
                    oscard = oscard.COMPLETED_ONBOARDING;
                    oscard = option.bind(verify)(golfie, oscard);
                    michal = !oscard;
 142:
                    if(!michal) { _fun00010_ip = 206; continue _fun00009 }
 145:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 11;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    golfie = option.bind(oscard)(golfie);
                    oscard = golfie.hasFlag;
                    zuuluu = zuuluu.flags;
                    option = report != zuuluu;
                    report = 0;
                    if(!option) { _fun00010_ip = 190; continue _fun00009 }
 187:
                    report = zuuluu;
 190:
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.STARTED_ONBOARDING;
                    michal = oscard.bind(golfie)(report, zuuluu);
 206:
                    if(!michal) { _fun00010_ip = 242; continue _fun00009 }
 209:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 10;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    entity['guildId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 242:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_openOnboardingIfIncomplete'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/native/GuildOnboardingManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();