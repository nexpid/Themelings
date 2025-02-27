// app/modules/voice_panel/native/controls/useControlsButtons.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CONTROLS_BUTTON_SIZE_LARGE;
    var _closure1_slot5 = golfie;
    tangon = tangon.CONTROLS_BUTTON_SIZE_NORMAL;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InputModes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = function(argFoo, argBar) { // Original name: mic
        report = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 5;
        entity = zuuluu[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        zuuluu = entity.MicButton;
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['mic'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: ptt
        report = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 5;
        entity = zuuluu[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        zuuluu = entity.PTTButton;
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['ptt'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: micConnected
        report = _closure1_slot8;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 5;
        entity = zuuluu[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        zuuluu = entity.MicButton;
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['micConnected'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: connect
        report = _closure1_slot8;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 6;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['connect'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: chat
        report = _closure1_slot8;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['chat'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: disconnectCancel
        report = _closure1_slot8;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 8;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['disconnectCancel'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: video
        report = _closure1_slot8;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 9;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['video'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: activities
        report = _closure1_slot8;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 10;
        entity = zuuluu[entity];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(entity);
        michal = {};
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = argFoo;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    tangon['activities'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controls/useControlsButtons.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useControlsButtons
        tangon = _closure1_slot3;
        zuuluu = tangon.useContext;
        option = _closure1_slot1;
        verify = _closure1_slot2;
        michal = 11;
        michal = verify[michal];
        report = undefined;
        michal = option.bind(report)(michal);
        michal = zuuluu.bind(tangon)(michal);
        zuuluu = michal.channelId;
        backup = michal.windowDimensions;
        var _closure2_slot0 = backup;
        foxtra = michal.safeArea;
        var _closure2_slot1 = foxtra;
        michal = 12;
        michal = verify[michal];
        michal = option.bind(report)(michal);
        golfie = michal.bind(report)(zuuluu);
        var _closure2_slot2 = golfie;
        sizing = _closure1_slot0;
        michal = 13;
        michal = verify[michal];
        offset = sizing.bind(report)(michal);
        oscard = offset.useStateFromStores;
        michal = _closure1_slot4;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getMode;
            michal = michal.bind(zuuluu)();
            entity = _closure1_slot7;
            entity = entity.PUSH_TO_TALK;
            entity = michal === entity;
            return entity;
        };
        oscard = oscard.bind(offset)(zuuluu, michal);
        var _closure2_slot3 = oscard;
        michal = 14;
        michal = verify[michal];
        offset = sizing.bind(report)(michal);
        zuuluu = offset.useDerivedValue;
        michal = function() { // Original name: n
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.getControlsDefaultWidth;
            zuuluu = _closure2_slot0;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)();
            zuuluu = michal.width;
            oscard = _closure2_slot1;
            entity = oscard.get;
            entity = entity.bind(oscard)();
            michal = entity.left;
            entity = oscard.get;
            entity = entity.bind(oscard)();
            entity = entity.right;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        romeon = {};
        kiloes = 15;
        kiloes = verify[kiloes];
        kiloes = sizing.bind(report)(kiloes);
        kiloes = kiloes.getControlsDefaultWidth;
        romeon['getControlsDefaultWidth'] = kiloes;
        romeon['windowDimensions'] = backup;
        romeon['safeArea'] = foxtra;
        michal['__closure'] = romeon;
        romeon = 16456936876254.0;
        michal['__workletHash'] = romeon;
        yankee = _closure1_slot10;
        michal['__initData'] = yankee;
        zuuluu = zuuluu.bind(offset)(michal);
        michal = 16;
        michal = verify[michal];
        michal = option.bind(report)(michal);
        report = michal.bind(report)(zuuluu);
        var _closure2_slot4 = report;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = false;
                var _closure3_slot0 = entity;
                entity = 0;
                var _closure3_slot1 = entity;
                michal = _closure2_slot2;
                entity = _closure2_slot3;
                tangon = new Array(0);
                oscard = tangon.push;
                if(michal) { _fun00008_ip = 149; continue _fun00007 }
 37:
                michal = {'type': 'icon-normal', 'key': 'disconnected-mute'};
                golfie = _closure1_slot9;
                report = golfie.mic;
                michal['render'] = report;
                michal = oscard.bind(tangon)(michal);
                report = tangon.push;
                michal = {'type': 'label', 'key': 'disconnected-connect'};
                option = golfie.connect;
                michal['render'] = option;
                michal = report.bind(tangon)(michal);
                report = tangon.push;
                michal = {'type': 'icon-normal', 'key': 'disconnected-chat'};
                golfie = golfie.chat;
                michal['render'] = golfie;
                michal = report.bind(tangon)(michal);
                _fun00008_ip = 383; continue _fun00007;
 149:
                michal = {'type': 'icon-normal', 'key': 'connected-video'};
                golfie = _closure1_slot9;
                golfie = golfie.video;
                michal['render'] = golfie;
                michal = oscard.bind(tangon)(michal);
                if(entity) { _fun00008_ip = 228; continue _fun00007 }
 189:
                oscard = tangon.push;
                michal = {'type': 'icon-normal', 'key': 'connected-mic'};
                golfie = _closure1_slot9;
                golfie = golfie.micConnected;
                michal['render'] = golfie;
                michal = oscard.bind(tangon)(michal);
 228:
                oscard = tangon.push;
                michal = {'type': 'icon-normal', 'key': 'connected-chat'};
                golfie = _closure1_slot9;
                golfie = golfie.chat;
                michal['render'] = golfie;
                michal = oscard.bind(tangon)(michal);
                if(!entity) { _fun00008_ip = 309; continue _fun00007 }
 270:
                michal = tangon.push;
                entity = {'type': 'icon-large', 'key': 'connected-ptt'};
                oscard = _closure1_slot9;
                oscard = oscard.ptt;
                entity['render'] = oscard;
                entity = michal.bind(tangon)(entity);
 309:
                michal = tangon.push;
                entity = {'type': 'icon-normal', 'key': 'connected-activities'};
                report = _closure1_slot9;
                oscard = report.activities;
                entity['render'] = oscard;
                entity = michal.bind(tangon)(entity);
                michal = tangon.push;
                entity = {'type': 'icon-normal', 'key': 'connected-disconnect'};
                report = report.disconnectCancel;
                entity['render'] = report;
                entity = michal.bind(tangon)(entity);
 383:
                michal = tangon.map;
                entity = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu.type;
                        report = 'label';
                        if(!(report === entity)) { _fun00010_ip = 25; continue _fun00009 }
 16:
                        entity = true;
                        _closure3_slot0 = entity;
 25:
                        michal = _closure1_slot6;
                        oscard = zuuluu.type;
                        tangon = 'icon-large';
                        if(!(tangon === oscard)) { _fun00010_ip = 69; continue _fun00009 }
 47:
                        golfie = _closure3_slot1;
                        tangon = 1;
                        tangon = golfie + tangon;
                        _closure3_slot1 = tangon;
                        michal = _closure1_slot5;
 69:
                        entity = {};
                        verify = entity;
                        option = zuuluu;
                        tangon = copyDataProperties(verify, option);
                        tangon = 'height';
                        entity[tangon] = michal;
                        tangon = zuuluu.type;
                        zuuluu = -1;
                        if(!(report !== tangon)) { _fun00010_ip = 108; continue _fun00009 }
 105:
                        zuuluu = michal;
 108:
                        michal = 'width';
                        entity[michal] = zuuluu;
                        zuuluu = 0;
                        michal = 'x';
                        entity[michal] = zuuluu;
                        michal = 'y';
                        entity[michal] = zuuluu;
                        return entity;
                    }
                };
                entity = michal.bind(tangon)(entity);
                michal = _closure3_slot0;
                romeon = 16;
                yankee = romeon;
                if(michal) { _fun00008_ip = 484; continue _fun00007 }
 413:
                report = _closure2_slot4;
                oscard = _closure3_slot1;
                tangon = _closure1_slot5;
                tangon = oscard * tangon;
                tangon = report - tangon;
                report = entity.length;
                zuuluu = _closure3_slot1;
                zuuluu = report - zuuluu;
                michal = _closure1_slot6;
                michal = zuuluu * michal;
                report = entity.length;
                zuuluu = 1;
                zuuluu = report - zuuluu;
                tangon = tangon - michal;
                michal = 32;
                michal = tangon - michal;
                yankee = michal / zuuluu;
 484:
                michal = _closure1_slot11;
                verify = undefined;
                option = michal.bind(verify)(entity);
                zuuluu = option.bind(verify)();
                michal = zuuluu.done;
                golfie = 2;
                oscard = 1;
                report = 32;
                tangon = -1;
                if(michal) { _fun00008_ip = 643; continue _fun00007 }
 525:
                kiloes = zuuluu.value;
                michal = kiloes.width;
                if(!(tangon === michal)) { _fun00008_ip = 594; continue _fun00007 }
 539:
                backup = entity.length;
                sizing = backup - oscard;
                backup = _closure1_slot6;
                output = sizing * backup;
                backup = entity.length;
                backup = backup - oscard;
                sizing = _closure2_slot4;
                output = report + output;
                backup = backup * yankee;
                backup = output + backup;
                backup = sizing - backup;
                kiloes['width'] = backup;
                michal = backup;
 594:
                backup = _closure2_slot4;
                backup = backup / golfie;
                sizing = michal / golfie;
                backup = romeon - backup;
                backup = backup + sizing;
                kiloes['x'] = backup;
                michal = michal + yankee;
                romeon = romeon + michal;
                backup = option.bind(verify)();
                michal = backup.done;
                zuuluu = backup;
                if(!michal) { _fun00008_ip = 525; continue _fun00007 }
 643:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();