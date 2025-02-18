// app/modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx
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
            michal = _closure1_slot8;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot7;
            entity = _closure1_slot12;
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
            report = _closure1_slot8;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: AppLauncherOnboardingStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot5;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot11;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot9;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot6;
        report = {};
        entity = 'getRecentMessageMetadata';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot3;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getRecentApplicationCommandMetadata';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot4;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'AppLauncherOnboardingStore';
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleApplicationCommandUsed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.command;
            tangon = entity.context;
            oscard = entity.commandOrigin;
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            michal = golfie.bind(entity)(michal);
            michal = michal.CommandOrigin;
            michal = michal.APPLICATION_LAUNCHER;
            michal = oscard !== michal;
            if(!michal) { _fun00006_ip = 75; continue _fun00005 }
 64:
            golfie = tangon.channel;
            oscard = null;
            michal = oscard != golfie;
 75:
            if(!michal) { _fun00006_ip = 154; continue _fun00005 }
 78:
            michal = {};
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            oscard = oscard.bind(golfie)();
            michal['timeMs'] = oscard;
            report = report.applicationId;
            michal['applicationId'] = report;
            oscard = tangon.guild;
            report = null;
            golfie = report == oscard;
            report = undefined;
            if(golfie) { _fun00006_ip = 132; continue _fun00005 }
 127:
            report = oscard.id;
 132:
            michal['guildId'] = report;
            tangon = tangon.channel;
            tangon = tangon.id;
            michal['channelId'] = tangon;
            var _closure1_slot4 = michal;
 154:
            return entity;
        }
    };
    michal['APPLICATION_COMMAND_USED'] = verify;
    tangon = function(argFoo) { // Original name: handleMessageCreate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = entity.guildId;
            entity = entity.message;
            oscard = _closure1_slot10;
            report = oscard.getCurrentUser;
            report = report.bind(oscard)();
            golfie = null;
            if(!(golfie != report)) { _fun00008_ip = 192; continue _fun00007 }
 43:
            oscard = report.id;
            if(!(golfie != oscard)) { _fun00008_ip = 192; continue _fun00007 }
 55:
            oscard = entity.author;
            if(!(golfie != oscard)) { _fun00008_ip = 192; continue _fun00007 }
 68:
            oscard = report.id;
            report = entity.author;
            report = report.id;
            if(!(oscard === report)) { _fun00008_ip = 192; continue _fun00007 }
 88:
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            report = 6;
            report = verify[report];
            option = undefined;
            oscard = oscard.bind(option)(report);
            report = oscard.extractTimestamp;
            entity = entity.id;
            report = report.bind(oscard)(entity);
            entity = global;
            oscard = entity.Date;
            entity = oscard.now;
            oscard = entity.bind(oscard)();
            golfie = _closure1_slot0;
            entity = 7;
            entity = verify[entity];
            entity = golfie.bind(option)(entity);
            entity = entity.RECENT_MESSAGE_MS;
            entity = report + entity;
            if(!(!(oscard > entity))) { _fun00008_ip = 192; continue _fun00007 }
 173:
            entity = {};
            entity['timeMs'] = report;
            entity['guildId'] = tangon;
            entity['channelId'] = zuuluu;
            var _closure1_slot3 = entity;
 192:
            entity = undefined;
            return entity;
        }
    };
    michal['MESSAGE_CREATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();