// app/modules/chat_input/native/ChatInputNativeCommands.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.findNodeHandle;
    var _closure1_slot3 = golfie;
    michal = michal.NativeModules;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: backspace
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 115; continue _fun00001 }
 9:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00002_ip = 78; continue _fun00001 }
 46:
            michal = _closure1_slot4;
            oscard = michal.DCDChatInputManager;
            report = oscard.backspace;
            michal = _closure1_slot3;
            michal = michal.bind(tangon)(zuuluu);
            michal = report.bind(oscard)(michal);
            _fun00002_ip = 115; continue _fun00001;
 78:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Commands;
            entity = michal.backspace;
            entity = entity.bind(michal)(zuuluu);
 115:
            entity = undefined;
            return entity;
        }
    };
    michal['backspace'] = golfie;
    golfie = function(argFoo) { // Original name: blur
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 115; continue _fun00003 }
 9:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00004_ip = 78; continue _fun00003 }
 46:
            michal = _closure1_slot4;
            oscard = michal.DCDChatInputManager;
            report = oscard.blur;
            michal = _closure1_slot3;
            michal = michal.bind(tangon)(zuuluu);
            michal = report.bind(oscard)(michal);
            _fun00004_ip = 115; continue _fun00003;
 78:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Commands;
            entity = michal.blur;
            entity = entity.bind(michal)(zuuluu);
 115:
            entity = undefined;
            return entity;
        }
    };
    michal['blur'] = golfie;
    golfie = function(argFoo) { // Original name: closeCustomKeyboard
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 76; continue _fun00005 }
 9:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isAndroid;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00006_ip = 80; continue _fun00005 }
 46:
            michal = _closure1_slot4;
            zuuluu = michal.DCDChatInputManager;
            michal = zuuluu.closeCustomKeyboard;
            entity = _closure1_slot3;
            entity = entity.bind(tangon)(report);
            entity = michal.bind(zuuluu)(entity);
 76:
            entity = undefined;
            return entity;
 80:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            oscard = 'closeCustomKeyboard is not supported/needed on Android';
            golfie = michal;
            entity = new golfie[zuuluu](oscard, report);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    michal['closeCustomKeyboard'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: flushText
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00008_ip = 123; continue _fun00007 }
 9:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 1;
            michal = zuuluu[michal];
            zuuluu = undefined;
            report = report.bind(zuuluu)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00008_ip = 82; continue _fun00007 }
 46:
            michal = global;
            oscard = michal.Error;
            michal = oscard.prototype;
            report = Object.create(michal, {constructor: {value: oscard}});
            option = 'flushText is not supported/needed on iOS';
            verify = report;
            michal = new verify[oscard](option, golfie);
            michal = michal instanceof Object ? michal : report;
            throw michal;
 82:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.Commands;
            michal = zuuluu.flushText;
            entity = argBar;
            entity = michal.bind(zuuluu)(tangon, entity);
 123:
            entity = undefined;
            return entity;
        }
    };
    michal['flushText'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: getText
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            verify = argBar;
            option = argBaz;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = option;
            entity = null;
            if(!(entity != oscard)) { _fun00010_ip = 333; continue _fun00009 }
 28:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            golfie = golfie.bind(michal)(tangon);
            tangon = golfie.isAndroid;
            tangon = tangon.bind(golfie)();
            if(tangon) { _fun00010_ip = 249; continue _fun00009 }
 68:
            tangon = _closure1_slot3;
            offset = tangon.bind(michal)(oscard);
            if(!(entity != offset)) { _fun00010_ip = 182; continue _fun00009 }
 81:
            tangon = _closure1_slot4;
            romeon = tangon.DCDChatInputManager;
            yankee = romeon.markTextInputChanged;
            golfie = _closure1_slot3;
            golfie = golfie.bind(michal)(oscard);
            golfie = yankee.bind(romeon)(golfie);
            golfie = tangon.DCDChatInputManager;
            tangon = golfie.getText;
            golfie = tangon.bind(golfie)(offset);
            tangon = golfie.then;
            option = tangon.bind(golfie)(option);
            golfie = option.catch;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            tangon = 4;
            tangon = yankee[tangon];
            tangon = offset.bind(michal)(tangon);
            tangon = tangon.captureException;
            tangon = golfie.bind(option)(tangon);
            _fun00010_ip = 331; continue _fun00009;
 182:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 4;
            tangon = option[tangon];
            option = golfie.bind(michal)(tangon);
            golfie = option.captureException;
            tangon = global;
            yankee = tangon.Error;
            tangon = yankee.prototype;
            offset = Object.create(tangon, {constructor: {value: yankee}});
            backup = 'inputRef is null';
            kiloes = offset;
            tangon = new kiloes[yankee](backup, foxtra);
            tangon = tangon instanceof Object ? tangon : offset;
            tangon = golfie.bind(option)(tangon);
            _fun00010_ip = 331; continue _fun00009;
 249:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 3;
            report = golfie[report];
            option = tangon.bind(michal)(report);
            report = option.createNonce;
            report = report.bind(option)();
            var _closure2_slot2 = report;
            option = verify.set;
            zuuluu = function(argFoo) {
                tangon = _closure2_slot0;
                zuuluu = tangon.delete;
                michal = _closure2_slot2;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure2_slot1;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = option.bind(verify)(report, zuuluu);
            zuuluu = 2;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(michal)(zuuluu);
            tangon = zuuluu.Commands;
            zuuluu = tangon.flushText;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
 331:
            return michal;
 333:
            return entity;
        }
    };
    michal['getText'] = golfie;
    golfie = function(argFoo) { // Original name: focus
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00012_ip = 115; continue _fun00011 }
 9:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00012_ip = 78; continue _fun00011 }
 46:
            michal = _closure1_slot4;
            oscard = michal.DCDChatInputManager;
            report = oscard.focus;
            michal = _closure1_slot3;
            michal = michal.bind(tangon)(zuuluu);
            michal = report.bind(oscard)(michal);
            _fun00012_ip = 115; continue _fun00011;
 78:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Commands;
            entity = michal.focus;
            entity = entity.bind(michal)(zuuluu);
 115:
            entity = undefined;
            return entity;
        }
    };
    michal['focus'] = golfie;
    golfie = function(argFoo) { // Original name: openCustomKeyboard
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00014_ip = 119; continue _fun00013 }
 9:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00014_ip = 82; continue _fun00013 }
 46:
            michal = global;
            oscard = michal.Error;
            michal = oscard.prototype;
            report = Object.create(michal, {constructor: {value: oscard}});
            golfie = 'openCustomKeyboard is not supported/needed on iOS';
            option = report;
            michal = new option[oscard](golfie, oscard);
            michal = michal instanceof Object ? michal : report;
            throw michal;
 82:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Commands;
            entity = michal.openCustomKeyboard;
            entity = entity.bind(michal)(zuuluu);
 119:
            entity = undefined;
            return entity;
        }
    };
    michal['openCustomKeyboard'] = golfie;
    golfie = function(argFoo) { // Original name: openSystemKeyboard
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00016_ip = 115; continue _fun00015 }
 9:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00016_ip = 78; continue _fun00015 }
 46:
            michal = _closure1_slot4;
            oscard = michal.DCDChatInputManager;
            report = oscard.openSystemKeyboard;
            michal = _closure1_slot3;
            michal = michal.bind(tangon)(zuuluu);
            michal = report.bind(oscard)(michal);
            _fun00016_ip = 115; continue _fun00015;
 78:
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 2;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Commands;
            entity = michal.openSystemKeyboard;
            entity = entity.bind(michal)(zuuluu);
 115:
            entity = undefined;
            return entity;
        }
    };
    michal['openSystemKeyboard'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setText
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            entity = null;
            if(!(entity != tangon)) { _fun00018_ip = 120; continue _fun00017 }
 12:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            michal = 1;
            michal = report[michal];
            report = undefined;
            oscard = oscard.bind(report)(michal);
            michal = oscard.isAndroid;
            michal = michal.bind(oscard)();
            if(michal) { _fun00018_ip = 82; continue _fun00017 }
 49:
            michal = _closure1_slot4;
            golfie = michal.DCDChatInputManager;
            oscard = golfie.setText;
            michal = _closure1_slot3;
            michal = michal.bind(report)(tangon);
            michal = oscard.bind(golfie)(michal, zuuluu);
            _fun00018_ip = 120; continue _fun00017;
 82:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 2;
            entity = oscard[entity];
            entity = michal.bind(report)(entity);
            michal = entity.Commands;
            entity = michal.setText;
            entity = entity.bind(michal)(tangon, zuuluu);
 120:
            entity = undefined;
            return entity;
        }
    };
    michal['setText'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setSelectedRange
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = argBaz;
            entity = null;
            if(!(entity != report)) { _fun00020_ip = 125; continue _fun00019 }
 15:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 1;
            michal = oscard[michal];
            oscard = undefined;
            golfie = golfie.bind(oscard)(michal);
            michal = golfie.isAndroid;
            michal = michal.bind(golfie)();
            if(michal) { _fun00020_ip = 86; continue _fun00019 }
 52:
            michal = _closure1_slot4;
            option = michal.DCDChatInputManager;
            golfie = option.setSelectedRange;
            michal = _closure1_slot3;
            michal = michal.bind(oscard)(report);
            michal = golfie.bind(option)(michal, tangon, zuuluu);
            _fun00020_ip = 125; continue _fun00019;
 86:
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 2;
            entity = golfie[entity];
            entity = michal.bind(oscard)(entity);
            michal = entity.Commands;
            entity = michal.setSelectedRange;
            entity = entity.bind(michal)(report, tangon, zuuluu);
 125:
            entity = undefined;
            return entity;
        }
    };
    michal['setSelectedRange'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: updateTextBlocks
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            verify = argBar;
            oscard = argBaz;
            golfie = null;
            if(!(golfie != report)) { _fun00022_ip = 159; continue _fun00021 }
 18:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00022_ip = 89; continue _fun00021 }
 55:
            zuuluu = _closure1_slot4;
            option = zuuluu.DCDChatInputManager;
            tangon = option.updateTextBlocks;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.bind(entity)(report);
            zuuluu = tangon.bind(option)(zuuluu, verify, oscard);
            _fun00022_ip = 159; continue _fun00021;
 89:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Commands;
            zuuluu = tangon.updateTextBlocks;
            michal = global;
            option = michal.JSON;
            michal = option.stringify;
            michal = michal.bind(option)(verify);
            golfie = golfie != oscard;
            entity = undefined;
            if(!golfie) { _fun00022_ip = 152; continue _fun00021 }
 149:
            entity = oscard;
 152:
            entity = zuuluu.bind(tangon)(report, michal, entity);
 159:
            entity = undefined;
            return entity;
        }
    };
    michal['updateTextBlocks'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: replaceRange
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            offset = argFoo;
            michal = argBar;
            verify = michal.location;
            option = michal.length;
            golfie = michal.text;
            romeon = michal.nodes;
            entity = undefined;
            if(!(romeon === entity)) { _fun00024_ip = 37; continue _fun00023 }
 33:
            romeon = new Array(0);
 37:
            oscard = michal.keepCursorPosition;
            if(!(oscard === entity)) { _fun00024_ip = 49; continue _fun00023 }
 47:
            oscard = false;
 49:
            report = michal.editId;
            michal = null;
            if(!(michal != offset)) { _fun00024_ip = 227; continue _fun00023 }
 64:
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 1;
            zuuluu = yankee[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00024_ip = 151; continue _fun00023 }
 99:
            zuuluu = _closure1_slot4;
            yankee = zuuluu.DCDChatInputManager;
            tangon = yankee.replaceRange;
            zuuluu = _closure1_slot3;
            echoed = zuuluu.bind(entity)(offset);
            update = yankee;
            result = verify;
            output = option;
            sizing = golfie;
            kiloes = romeon;
            backup = oscard;
            foxtra = report;
            zuuluu = update[tangon](echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
            _fun00024_ip = 227; continue _fun00023;
 151:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.Commands;
            zuuluu = tangon.replaceRange;
            michal = global;
            yankee = michal.JSON;
            michal = yankee.stringify;
            kiloes = michal.bind(yankee)(romeon);
            update = tangon;
            echoed = offset;
            result = verify;
            output = option;
            sizing = golfie;
            backup = oscard;
            foxtra = report;
            michal = update[zuuluu](echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
 227:
            return entity;
        }
    };
    michal['replaceRange'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_input/native/ChatInputNativeCommands.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();