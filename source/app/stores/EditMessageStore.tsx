// app/stores/EditMessageStore.tsx
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
            report = _closure1_slot6;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = {};
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: EditMessageStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot11;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'isEditing';
        report['key'] = entity;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                entity = michal[entity];
                michal = null;
                zuuluu = michal == entity;
                michal = undefined;
                if(zuuluu) { _fun00006_ip = 30; continue _fun00005 }
 25:
                michal = entity.messageId;
 30:
                entity = argBar;
                entity = michal === entity;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'isEditingAny';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot9;
            entity = argFoo;
            michal = michal[entity];
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getEditingTextValue';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00008_ip = 31; continue _fun00007 }
 25:
                entity = michal.textValue;
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getEditingRichValue';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00010_ip = 31; continue _fun00009 }
 25:
                entity = michal.richValue;
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getEditingMessageId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00012_ip = 30; continue _fun00011 }
 25:
                entity = michal.messageId;
 30:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getEditingMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                entity = _closure1_slot9;
                michal = entity[report];
                oscard = null;
                tangon = oscard != michal;
                entity = null;
                if(!tangon) { _fun00014_ip = 60; continue _fun00013 }
 25:
                tangon = michal.messageId;
                tangon = oscard != tangon;
                entity = null;
                if(!tangon) { _fun00014_ip = 60; continue _fun00013 }
 39:
                tangon = _closure1_slot8;
                zuuluu = tangon.getMessage;
                michal = michal.messageId;
                entity = zuuluu.bind(tangon)(report, michal);
 60:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getEditActionSource';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = _closure1_slot10;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'EditMessageStore';
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleMessageStartEdit
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            option = entity.messageId;
            golfie = entity.content;
            zuuluu = entity.source;
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 6;
            report = romeon[entity];
            entity = undefined;
            report = verify.bind(entity)(report);
            oscard = report.UseLegacyChatInput;
            report = oscard.getSetting;
            yankee = report.bind(oscard)();
            oscard = _closure1_slot1;
            report = 7;
            report = romeon[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.unparse;
            offset = report.bind(oscard)(golfie, tangon);
            oscard = _closure1_slot9;
            report = {};
            report['channelId'] = tangon;
            report['messageId'] = option;
            report['textValue'] = offset;
            option = 8;
            option = romeon[option];
            verify = verify.bind(entity)(option);
            option = verify.toRichValue;
            if(!yankee) { _fun00016_ip = 135; continue _fun00015 }
 132:
            golfie = offset;
 135:
            golfie = option.bind(verify)(golfie);
            report['richValue'] = golfie;
            oscard[tangon] = report;
            michal = _closure1_slot10;
            michal[tangon] = zuuluu;
            return entity;
        }
    };
    michal['MESSAGE_START_EDIT'] = verify;
    verify = function(argFoo) { // Original name: handleMessageUpdateEdit
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            oscard = entity.textValue;
            report = entity.richValue;
            michal = _closure1_slot9;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal != tangon)) { _fun00018_ip = 79; continue _fun00017 }
 37:
            michal = _closure1_slot9;
            entity = {};
            option = entity;
            golfie = tangon;
            tangon = copyDataProperties(option, golfie);
            tangon = 'textValue';
            entity[tangon] = oscard;
            tangon = 'richValue';
            entity[tangon] = report;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
 79:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_UPDATE_EDIT'] = verify;
    verify = function(argFoo) { // Original name: handleMessageEndEdit
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.channelId;
            tangon = null;
            if(!(tangon != michal)) { _fun00020_ip = 49; continue _fun00019 }
 14:
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu[michal];
            if(!(tangon != zuuluu)) { _fun00020_ip = 49; continue _fun00019 }
 29:
            zuuluu = _closure1_slot9;
            zuuluu = delete zuuluu[michal];
            entity = _closure1_slot10;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
 49:
            entity = false;
            return entity;
        }
    };
    michal['MESSAGE_END_EDIT'] = verify;
    tangon = function(argFoo) { // Original name: handleMessageDelete
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            report = entity.id;
            entity = _closure1_slot9;
            oscard = entity[zuuluu];
            entity = null;
            golfie = entity == oscard;
            entity = undefined;
            tangon = undefined;
            if(golfie) { _fun00022_ip = 42; continue _fun00021 }
 37:
            tangon = oscard.messageId;
 42:
            if(!(tangon === report)) { _fun00022_ip = 62; continue _fun00021 }
 46:
            tangon = _closure1_slot9;
            tangon = delete tangon[zuuluu];
            michal = _closure1_slot10;
            michal = delete michal[zuuluu];
 62:
            return entity;
        }
    };
    michal['MESSAGE_DELETE'] = tangon;
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
    tangon = 'stores/EditMessageStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();