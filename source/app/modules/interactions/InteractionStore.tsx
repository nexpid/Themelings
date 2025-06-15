// app/modules/interactions/InteractionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: markInteractionByNonceCompleted
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            report = null;
            if(!(report != zuuluu)) { _fun00004_ip = 61; continue _fun00003 }
 9:
            michal = _closure1_slot13;
            tangon = michal[zuuluu];
            if(!(report != tangon)) { _fun00004_ip = 57; continue _fun00003 }
 24:
            michal = tangon.onSuccess;
            if(!(report != michal)) { _fun00004_ip = 44; continue _fun00003 }
 34:
            michal = tangon.onSuccess;
            michal = michal.bind(tangon)();
 44:
            michal = _closure1_slot21;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
 57:
            entity = false;
            return entity;
 61:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: deleteNonce
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot18;
            tangon = michal[zuuluu];
            michal = null;
            if(!(michal != tangon)) { _fun00006_ip = 30; continue _fun00005 }
 20:
            tangon = _closure1_slot18;
            tangon = delete tangon[zuuluu];
            _fun00006_ip = 120; continue _fun00005;
 30:
            tangon = _closure1_slot13;
            tangon = tangon[zuuluu];
            report = _closure1_slot13;
            report = delete report[zuuluu];
            report = _closure1_slot15;
            report = report[zuuluu];
            if(!(michal != report)) { _fun00006_ip = 66; continue _fun00005 }
 58:
            michal = _closure1_slot14;
            michal = delete michal[report];
 66:
            michal = _closure1_slot15;
            michal = delete michal[zuuluu];
            michal = _closure1_slot18;
            entity = {};
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            oscard = oscard.bind(golfie)();
            entity['insertedAt'] = oscard;
            entity['nonce'] = zuuluu;
            entity['messageId'] = report;
            entity['interaction'] = tangon;
            michal[zuuluu] = entity;
 120:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot7 = michal;
    report = 5;
    michal = option[report];
    michal = verify.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    tangon = option[michal];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.MINUTE;
    tangon = report * tangon;
    var _closure1_slot11 = tangon;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    michal = michal.Millis;
    report = michal.SECOND;
    michal = 10;
    michal = michal * report;
    var _closure1_slot12 = michal;
    report = {};
    var _closure1_slot13 = report;
    report = {};
    var _closure1_slot14 = report;
    report = {};
    var _closure1_slot15 = report;
    var _closure1_slot16 = entity;
    var _closure1_slot17 = entity;
    report = {};
    var _closure1_slot18 = report;
    report = 12;
    report = option[report];
    report = verify.bind(entity)(report);
    offset = report.Store;
    report = function(argFoo) {
        tangon = function() { // Original name: InteractionStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot19;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'getInteraction';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot14;
                entity = argFoo;
                entity = entity.id;
                zuuluu = zuuluu[entity];
                entity = null;
                tangon = entity != zuuluu;
                if(!tangon) { _fun00010_ip = 36; continue _fun00009 }
 28:
                michal = _closure1_slot13;
                entity = michal[zuuluu];
 36:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golfie = 'getMessageInteractionStates';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = {};
                michal = global;
                tangon = michal.Object;
                zuuluu = tangon.entries;
                michal = _closure1_slot13;
                verify = zuuluu.bind(tangon)(michal);
                michal = verify.length;
                option = 0;
                michal = option < michal;
                golfie = undefined;
                oscard = 2;
                report = 1;
                tangon = null;
                zuuluu = 0;
                if(!michal) { _fun00012_ip = 109; continue _fun00011 }
 54:
                yankee = verify[zuuluu];
                michal = _closure1_slot8;
                michal = michal.bind(golfie)(yankee, oscard);
                romeon = michal[option];
                michal = michal[report];
                yankee = _closure1_slot15;
                yankee = yankee[romeon];
                if(!(tangon != yankee)) { _fun00012_ip = 97; continue _fun00011 }
 88:
                michal = michal.state;
                entity[yankee] = michal;
 97:
                zuuluu = zuuluu + 1;
                michal = verify.length;
                if(zuuluu < michal) { _fun00012_ip = 54; continue _fun00011 }
 109:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'canQueueInteraction';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argBar;
                michal = _closure1_slot14;
                entity = argFoo;
                oscard = michal[entity];
                tangon = null;
                entity = tangon != oscard;
                if(!entity) { _fun00014_ip = 38; continue _fun00013 }
 26:
                michal = _closure1_slot13;
                michal = michal[oscard];
                entity = tangon != michal;
 38:
                if(!entity) { _fun00014_ip = 92; continue _fun00013 }
 41:
                michal = _closure1_slot13;
                michal = michal[oscard];
                oscard = michal.state;
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 9;
                golfie = golfie[michal];
                michal = undefined;
                michal = option.bind(michal)(golfie);
                michal = michal.InteractionState;
                michal = michal.FAILED;
                entity = oscard !== michal;
 92:
                if(entity) { _fun00014_ip = 164; continue _fun00013 }
 95:
                michal = _closure1_slot13;
                michal = michal[report];
                michal = tangon != michal;
                if(!michal) { _fun00014_ip = 161; continue _fun00013 }
 110:
                tangon = _closure1_slot13;
                tangon = tangon[report];
                tangon = tangon.state;
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 9;
                report = report[zuuluu];
                zuuluu = undefined;
                zuuluu = oscard.bind(zuuluu)(report);
                zuuluu = zuuluu.InteractionState;
                zuuluu = zuuluu.FAILED;
                michal = tangon !== zuuluu;
 161:
                entity = michal;
 164:
                entity = !entity;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getIFrameModalApplicationId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getIFrameModalKey';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = oscard;
        entity[4] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = report.bind(entity)(offset);
    report = 'InteractionStore';
    offset['displayName'] = report;
    report = 13;
    report = option[report];
    backup = verify.bind(entity)(report);
    report = {};
    yankee = function() { // Original name: handleInit
        michal = {};
        _closure1_slot13 = michal;
        michal = {};
        _closure1_slot14 = michal;
        michal = {};
        _closure1_slot15 = michal;
        michal = {};
        _closure1_slot18 = michal;
        michal = global;
        tangon = michal.setInterval;
        zuuluu = _closure1_slot11;
        entity = undefined;
        michal = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = global;
                zuuluu = entity.Date;
                michal = zuuluu.now;
                verify = michal.bind(zuuluu)();
                zuuluu = entity.Object;
                michal = zuuluu.entries;
                entity = _closure1_slot18;
                golfie = michal.bind(zuuluu)(entity);
                entity = golfie.length;
                oscard = 0;
                michal = oscard < entity;
                entity = undefined;
                report = 2;
                tangon = 1;
                zuuluu = 0;
                if(!michal) { _fun00016_ip = 125; continue _fun00015 }
 65:
                offset = golfie[zuuluu];
                michal = _closure1_slot8;
                michal = michal.bind(entity)(offset, report);
                offset = michal[oscard];
                michal = michal[tangon];
                michal = michal.insertedAt;
                yankee = verify - michal;
                michal = _closure1_slot12;
                if(!(yankee > michal)) { _fun00016_ip = 113; continue _fun00015 }
 105:
                michal = _closure1_slot18;
                michal = delete michal[offset];
 113:
                zuuluu = zuuluu + 1;
                michal = golfie.length;
                if(zuuluu < michal) { _fun00016_ip = 65; continue _fun00015 }
 125:
                return entity;
            }
        };
        michal = tangon.bind(entity)(michal, zuuluu);
        return entity;
    };
    report['LOGOUT'] = yankee;
    yankee = function(argFoo) { // Original name: handleInteractionQueue
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            tangon = entity.nonce;
            michal = entity.messageId;
            verify = entity.data;
            option = entity.onCreate;
            golfie = entity.onCancel;
            oscard = entity.onSuccess;
            report = entity.onFailure;
            entity = null;
            if(!(entity != michal)) { _fun00018_ip = 68; continue _fun00017 }
 49:
            zuuluu = _closure1_slot14;
            zuuluu[michal] = tangon;
            entity = _closure1_slot15;
            entity[tangon] = michal;
 68:
            zuuluu = _closure1_slot13;
            michal = {};
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 9;
            offset = offset[entity];
            entity = undefined;
            offset = yankee.bind(entity)(offset);
            offset = offset.InteractionState;
            offset = offset.QUEUED;
            michal['state'] = offset;
            michal['data'] = verify;
            michal['onCreate'] = option;
            michal['onCancel'] = golfie;
            michal['onSuccess'] = oscard;
            michal['onFailure'] = report;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    report['INTERACTION_QUEUE'] = yankee;
    yankee = function(argFoo) { // Original name: handleInteractionCreate
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.nonce;
            tangon = entity.interactionId;
            report = null;
            if(!(report != zuuluu)) { _fun00020_ip = 141; continue _fun00019 }
 21:
            entity = _closure1_slot13;
            zuuluu = entity[zuuluu];
            if(!(report != zuuluu)) { _fun00020_ip = 137; continue _fun00019 }
 36:
            option = zuuluu.state;
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 9;
            oscard = entity[golfie];
            entity = undefined;
            oscard = verify.bind(entity)(oscard);
            oscard = oscard.InteractionState;
            oscard = oscard.QUEUED;
            if(!(option === oscard)) { _fun00020_ip = 137; continue _fun00019 }
 79:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[golfie];
            michal = oscard.bind(entity)(michal);
            michal = michal.InteractionState;
            michal = michal.CREATED;
            zuuluu['state'] = michal;
            michal = zuuluu.onCreate;
            if(!(report != michal)) { _fun00020_ip = 135; continue _fun00019 }
 124:
            michal = zuuluu.onCreate;
            michal = michal.bind(zuuluu)(tangon);
 135:
            return entity;
 137:
            entity = false;
            return entity;
 141:
            entity = false;
            return entity;
        }
    };
    report['INTERACTION_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleInteractionSuccess
        entity = argFoo;
        zuuluu = entity.nonce;
        michal = _closure1_slot20;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    report['INTERACTION_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleInteractionFailure
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.nonce;
            option = entity.errorCode;
            golfie = entity.errorMessage;
            report = entity.status;
            tangon = entity.reasonCode;
            verify = null;
            if(!(verify != zuuluu)) { _fun00022_ip = 239; continue _fun00021 }
 41:
            entity = _closure1_slot13;
            oscard = entity[zuuluu];
            if(!(verify != oscard)) { _fun00022_ip = 235; continue _fun00021 }
 59:
            entity = oscard.onFailure;
            if(!(verify != entity)) { _fun00022_ip = 94; continue _fun00021 }
 69:
            entity = oscard.onFailure;
            kiloes = oscard;
            backup = option;
            foxtra = golfie;
            romeon = report;
            yankee = tangon;
            entity = kiloes[entity](backup, foxtra, romeon, yankee, offset);
 94:
            entity = oscard.data;
            report = entity.interactionType;
            verify = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            tangon = tangon[entity];
            entity = undefined;
            tangon = verify.bind(entity)(tangon);
            tangon = tangon.InteractionTypes;
            tangon = tangon.APPLICATION_COMMAND;
            if(!(report !== tangon)) { _fun00022_ip = 224; continue _fun00021 }
 143:
            report = _closure1_slot13;
            tangon = {};
            backup = tangon;
            foxtra = oscard;
            oscard = copyDataProperties(backup, foxtra);
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 9;
            oscard = offset[oscard];
            oscard = verify.bind(entity)(oscard);
            oscard = oscard.InteractionState;
            verify = oscard.FAILED;
            oscard = 'state';
            tangon[oscard] = verify;
            oscard = 'errorCode';
            tangon[oscard] = option;
            oscard = 'errorMessage';
            tangon[oscard] = golfie;
            report[zuuluu] = tangon;
            _fun00022_ip = 233; continue _fun00021;
 224:
            michal = _closure1_slot21;
            michal = michal.bind(entity)(zuuluu);
 233:
            return entity;
 235:
            entity = false;
            return entity;
 239:
            entity = false;
            return entity;
        }
    };
    report['INTERACTION_FAILURE'] = yankee;
    yankee = function(argFoo) { // Original name: handleMessageCreate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            entity = entity.message;
            michal = entity.nonce;
            report = null;
            if(!(report != michal)) { _fun00024_ip = 84; continue _fun00023 }
 20:
            tangon = _closure1_slot13;
            zuuluu = entity.nonce;
            tangon = tangon[zuuluu];
            if(!(report != tangon)) { _fun00024_ip = 80; continue _fun00023 }
 41:
            zuuluu = tangon.onSuccess;
            if(!(report != zuuluu)) { _fun00024_ip = 61; continue _fun00023 }
 51:
            zuuluu = tangon.onSuccess;
            zuuluu = zuuluu.bind(tangon)();
 61:
            zuuluu = _closure1_slot21;
            michal = entity.nonce;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 80:
            entity = false;
            return entity;
 84:
            entity = false;
            return entity;
        }
    };
    report['MESSAGE_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleChannelSelect
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            michal = _closure1_slot10;
            entity = michal.getChannel;
            michal = entity.bind(michal)(zuuluu);
            entity = null;
            if(!(entity != michal)) { _fun00026_ip = 167; continue _fun00025 }
 34:
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.entries;
            entity = _closure1_slot13;
            option = michal.bind(zuuluu)(entity);
            entity = option.length;
            golfie = 0;
            michal = golfie < entity;
            entity = undefined;
            oscard = 2;
            report = 1;
            tangon = 9;
            zuuluu = 0;
            if(!michal) { _fun00026_ip = 165; continue _fun00025 }
 84:
            offset = option[zuuluu];
            michal = _closure1_slot8;
            michal = michal.bind(entity)(offset, oscard);
            offset = michal[golfie];
            michal = michal[report];
            yankee = michal.state;
            romeon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            michal = romeon.bind(entity)(michal);
            michal = michal.InteractionState;
            michal = michal.FAILED;
            if(!(yankee === michal)) { _fun00026_ip = 153; continue _fun00025 }
 144:
            michal = _closure1_slot21;
            michal = michal.bind(entity)(offset);
 153:
            zuuluu = zuuluu + 1;
            michal = option.length;
            if(zuuluu < michal) { _fun00026_ip = 84; continue _fun00025 }
 165:
            return entity;
 167:
            entity = false;
            return entity;
        }
    };
    report['CHANNEL_SELECT'] = yankee;
    yankee = function(argFoo) { // Original name: handleIFrameModalCreate
        michal = argFoo;
        entity = michal.application;
        zuuluu = michal.nonce;
        michal = entity.id;
        _closure1_slot17 = michal;
        michal = _closure1_slot20;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    report['INTERACTION_IFRAME_MODAL_CREATE'] = yankee;
    yankee = function() { // Original name: handleIFrameModalClose
        entity = undefined;
        _closure1_slot16 = entity;
        _closure1_slot17 = entity;
        return entity;
    };
    report['INTERACTION_IFRAME_MODAL_CLOSE'] = yankee;
    yankee = function(argFoo) { // Original name: handleIFrameModalKeyCreate
        entity = argFoo;
        michal = entity.modalKey;
        _closure1_slot16 = michal;
        entity = undefined;
        return entity;
    };
    report['INTERACTION_IFRAME_MODAL_KEY_CREATE'] = yankee;
    yankee = function(argFoo) { // Original name: handleInteractionModalCreate
        entity = argFoo;
        zuuluu = entity.nonce;
        michal = _closure1_slot20;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    report['INTERACTION_MODAL_CREATE'] = yankee;
    oscard = function(argFoo) { // Original name: handleEmbeddedActivityUpdateV2
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            tangon = michal.participants;
            report = _closure1_slot9;
            zuuluu = report.getSessionId;
            zuuluu = zuuluu.bind(report)();
            var _closure2_slot0 = zuuluu;
            zuuluu = report.getId;
            zuuluu = zuuluu.bind(report)();
            var _closure2_slot1 = zuuluu;
            zuuluu = tangon.find;
            entity = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.user_id;
                    entity = _closure2_slot1;
                    entity = tangon === entity;
                    if(!entity) { _fun00030_ip = 37; continue _fun00029 }
 23:
                    zuuluu = zuuluu.session_id;
                    michal = _closure2_slot0;
                    entity = zuuluu === michal;
 37:
                    return entity;
                }
            };
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00028_ip = 242; continue _fun00027 }
 71:
            entity = tangon.nonce;
            if(!(zuuluu != entity)) { _fun00028_ip = 242; continue _fun00027 }
 84:
            report = _closure1_slot18;
            entity = tangon.nonce;
            entity = report[entity];
            if(!(zuuluu != entity)) { _fun00028_ip = 115; continue _fun00027 }
 102:
            report = entity.messageId;
            entity = entity.interaction;
            _fun00028_ip = 143; continue _fun00027;
 115:
            golfie = _closure1_slot15;
            oscard = tangon.nonce;
            report = golfie[oscard];
            option = _closure1_slot13;
            oscard = tangon.nonce;
            entity = option[oscard];
 143:
            oscard = zuuluu != entity;
            if(!oscard) { _fun00028_ip = 154; continue _fun00027 }
 150:
            oscard = zuuluu != report;
 154:
            if(!oscard) { _fun00028_ip = 242; continue _fun00027 }
 157:
            golfie = _closure1_slot21;
            oscard = tangon.nonce;
            tangon = undefined;
            oscard = golfie.bind(tangon)(oscard);
            zuuluu = zuuluu != report;
            if(!zuuluu) { _fun00028_ip = 194; continue _fun00027 }
 181:
            golfie = entity.data;
            oscard = 'channelId';
            zuuluu = oscard in golfie;
 194:
            if(!zuuluu) { _fun00028_ip = 242; continue _fun00027 }
 197:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 11;
            michal = oscard[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.deleteMessage;
            entity = entity.data;
            michal = entity.channelId;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, report, entity);
 242:
            entity = undefined;
            return entity;
        }
    };
    report['EMBEDDED_ACTIVITY_UPDATE_V2'] = oscard;
    oscard = offset.prototype;
    oscard = Object.create(oscard, {constructor: {value: offset}});
    kiloes = oscard;
    foxtra = report;
    report = new kiloes[offset](backup, foxtra, romeon);
    report = report instanceof Object ? report : oscard;
    oscard = 14;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/interactions/InteractionStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['STALE_INTERACTION_INTERVAL'] = tangon;
    zuuluu['STALE_INTERACTION_DURATION'] = michal;
    return entity;
})();