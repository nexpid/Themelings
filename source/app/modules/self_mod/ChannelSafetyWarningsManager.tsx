// app/modules/self_mod/ChannelSafetyWarningsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot10;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.channelId;
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 258; continue _fun00005 }
 17:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 7;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = golfie.isEligibleForInappropriateConversationWarning;
            zuuluu = {};
            option = 'channel_select';
            zuuluu['location'] = option;
            zuuluu = oscard.bind(golfie)(zuuluu);
            if(zuuluu) { _fun00006_ip = 72; continue _fun00005 }
 68:
            zuuluu = false;
            return zuuluu;
 72:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            option = 8;
            zuuluu = zuuluu[option];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.getSafetyAlertsSettingOrDefault;
            zuuluu = zuuluu.bind(oscard)();
            if(zuuluu) { _fun00006_ip = 109; continue _fun00005 }
 105:
            zuuluu = false;
            return zuuluu;
 109:
            oscard = _closure1_slot7;
            zuuluu = oscard.getChannel;
            golfie = zuuluu.bind(oscard)(report);
            if(!(entity != golfie)) { _fun00006_ip = 254; continue _fun00005 }
 130:
            zuuluu = golfie.isDM;
            zuuluu = zuuluu.bind(golfie)();
            if(!zuuluu) { _fun00006_ip = 254; continue _fun00005 }
 143:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[option];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.getInappropriateConversationTakeoverForChannel;
            oscard = zuuluu.bind(oscard)(report);
            entity = entity != oscard;
            if(!entity) { _fun00006_ip = 252; continue _fun00005 }
 178:
            zuuluu = _closure1_slot0;
            option = _closure1_slot1;
            michal = 9;
            michal = option[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.showTakeoverModal;
            michal = {};
            option = oscard.id;
            michal['warningId'] = option;
            oscard = oscard.type;
            michal['warningType'] = oscard;
            oscard = golfie.getRecipientId;
            oscard = oscard.bind(golfie)();
            michal['senderId'] = oscard;
            michal['channelId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity = true;
 252:
            return entity;
 254:
            entity = false;
            return entity;
 258:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: handleChannelUpdates
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscard = entity.channels;
            tangon = undefined;
            var _closure2_slot0 = tangon;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 7;
            entity = golfie[entity];
            golfie = report.bind(tangon)(entity);
            report = golfie.isEligibleForInappropriateConversationWarning;
            entity = {};
            option = 'channel_updates';
            entity['location'] = option;
            entity = report.bind(golfie)(entity);
            if(entity) { _fun00008_ip = 68; continue _fun00007 }
 64:
            entity = false;
            return entity;
 68:
            report = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 8;
            entity = entity[golfie];
            report = report.bind(tangon)(entity);
            entity = report.getSafetyAlertsSettingOrDefault;
            entity = entity.bind(report)();
            if(entity) { _fun00008_ip = 105; continue _fun00007 }
 101:
            entity = false;
            return entity;
 105:
            report = _closure1_slot8;
            entity = report.getCurrentlySelectedChannelId;
            report = entity.bind(report)();
            _closure2_slot0 = report;
            entity = null;
            if(!(entity != report)) { _fun00008_ip = 300; continue _fun00007 }
 132:
            report = oscard.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            report = report.bind(oscard)(zuuluu);
            if(!(entity != report)) { _fun00008_ip = 296; continue _fun00007 }
 156:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            golfie = oscard.bind(tangon)(zuuluu);
            oscard = golfie.getInappropriateConversationTakeoverForChannel;
            zuuluu = report.id;
            oscard = oscard.bind(golfie)(zuuluu);
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00008_ip = 209; continue _fun00007 }
 196:
            entity = report.isDM;
            entity = entity.bind(report)();
            zuuluu = !entity;
 209:
            entity = !zuuluu;
            if(zuuluu) { _fun00008_ip = 294; continue _fun00007 }
 215:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 9;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.showTakeoverModal;
            michal = {};
            golfie = oscard.id;
            michal['warningId'] = golfie;
            oscard = oscard.type;
            michal['warningType'] = oscard;
            oscard = report.getRecipientId;
            oscard = oscard.bind(report)();
            michal['senderId'] = oscard;
            report = report.id;
            michal['channelId'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity = true;
 294:
            return entity;
 296:
            entity = false;
            return entity;
 300:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: ChannelSafetyWarningsManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            michal = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            michal = {};
            tangon = _closure1_slot11;
            michal['CHANNEL_SELECT'] = tangon;
            zuuluu = _closure1_slot12;
            michal['CHANNEL_UPDATES'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot6;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot2;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/ChannelSafetyWarningsManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();