// app/modules/keyboard/native/PortalKeyboardUIStore.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    tangon = function() { // Original name: closePortalKeyboard
        tangon = _closure1_slot2;
        zuuluu = tangon.setState;
        michal = {};
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        entity = 1;
        report = report[entity];
        entity = undefined;
        report = oscard.bind(entity)(report);
        report = report.PortalKeyboardState;
        report = report.CLOSED;
        michal['state'] = report;
        report = null;
        michal['keyboard'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = golfie.bind(entity)(report);
    oscard = report.createZustandStore;
    report = function() {
        entity = {};
        michal = null;
        entity['keyboard'] = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        michal = michal.PortalKeyboardState;
        michal = michal.EMPTY;
        entity['state'] = michal;
        michal = new Array(0);
        entity['renderers'] = michal;
        return entity;
    };
    oscard = oscard.bind(entity)(report);
    var _closure1_slot2 = oscard;
    report = {};
    verify = oscard.getField;
    report['getField'] = verify;
    oscard = oscard.useField;
    report['useField'] = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/keyboard/native/PortalKeyboardUIStore.native.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['PortalKeyboardUIStore'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: openPortalKeyboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            michal = _closure1_slot2;
            entity = michal.getState;
            entity = entity.bind(michal)();
            oscard = entity.state;
            tangon = entity.keyboard;
            zuuluu = null;
            golfie = zuuluu == tangon;
            entity = undefined;
            michal = undefined;
            if(golfie) { _fun00002_ip = 52; continue _fun00001 }
 47:
            michal = tangon.type;
 52:
            michal = michal === offset;
            if(!michal) { _fun00002_ip = 77; continue _fun00001 }
 59:
            golfie = zuuluu == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 73; continue _fun00001 }
 68:
            zuuluu = tangon.channelId;
 73:
            michal = zuuluu === verify;
 77:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            golfie = 1;
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.PortalKeyboardState;
            zuuluu = zuuluu.REQUEST_OPEN;
            zuuluu = oscard === zuuluu;
            if(zuuluu) { _fun00002_ip = 149; continue _fun00001 }
 116:
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = option.bind(entity)(tangon);
            tangon = tangon.PortalKeyboardState;
            tangon = tangon.OPENING;
            zuuluu = oscard === tangon;
 149:
            if(zuuluu) { _fun00002_ip = 185; continue _fun00001 }
 152:
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[golfie];
            tangon = option.bind(entity)(tangon);
            tangon = tangon.PortalKeyboardState;
            tangon = tangon.OPEN;
            zuuluu = oscard === tangon;
 185:
            if(!michal) { _fun00002_ip = 191; continue _fun00001 }
 188:
            michal = zuuluu;
 191:
            if(michal) { _fun00002_ip = 293; continue _fun00001 }
 194:
            tangon = _closure1_slot2;
            zuuluu = tangon.setState;
            michal = {};
            option = {};
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            yankee = 2;
            yankee = report[yankee];
            romeon = oscard.bind(entity)(yankee);
            yankee = romeon.v4;
            yankee = yankee.bind(romeon)();
            option['id'] = yankee;
            option['type'] = offset;
            option['channelId'] = verify;
            verify = argBaz;
            option['chatInputRef'] = verify;
            michal['keyboard'] = option;
            report = report[golfie];
            report = oscard.bind(entity)(report);
            report = report.PortalKeyboardState;
            report = report.REQUEST_OPEN;
            michal['state'] = report;
            michal = zuuluu.bind(tangon)(michal);
 293:
            return entity;
        }
    };
    zuuluu['openPortalKeyboard'] = report;
    report = function(argFoo) { // Original name: registerPortalKeyboardRenderer
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot2;
        zuuluu = tangon.setState;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                report = zuuluu.renderers;
                michal = report.includes;
                entity = _closure2_slot0;
                michal = michal.bind(report)(entity);
                entity = zuuluu;
                if(michal) { _fun00004_ip = 77; continue _fun00003 }
 32:
                michal = {};
                option = zuuluu.renderers;
                zuuluu = new Array(1);
                golfie = 0;
                verify = zuuluu;
                report = arraySpread(verify, option, golfie);
                tangon = _closure2_slot0;
                zuuluu[report] = tangon;
                tangon = 1;
                tangon = report + tangon;
                michal['renderers'] = zuuluu;
                entity = michal;
 77:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = argFoo;
                tangon = michal.renderers;
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    michal = _closure2_slot0;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                entity['renderers'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        return entity;
    };
    zuuluu['registerPortalKeyboardRenderer'] = report;
    report = function(argFoo) { // Original name: handlePortalKeyboardOpen
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot2;
        michal = zuuluu.setState;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                zuuluu = report.keyboard;
                michal = null;
                entity = report;
                if(!(michal != zuuluu)) { _fun00006_ip = 123; continue _fun00005 }
 18:
                michal = report.keyboard;
                zuuluu = michal.handlerId;
                michal = _closure2_slot0;
                entity = report;
                if(!(zuuluu !== michal)) { _fun00006_ip = 123; continue _fun00005 }
 44:
                michal = {};
                zuuluu = {};
                oscard = report.keyboard;
                golfie = zuuluu;
                report = copyDataProperties(golfie, oscard);
                report = _closure2_slot0;
                tangon = 'handlerId';
                zuuluu[tangon] = report;
                michal['keyboard'] = zuuluu;
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 1;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.PortalKeyboardState;
                zuuluu = zuuluu.OPEN;
                michal['state'] = zuuluu;
                entity = michal;
 123:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['handlePortalKeyboardOpen'] = report;
    zuuluu['closePortalKeyboard'] = tangon;
    tangon = function() { // Original name: closePortalKeyboardIfUnhandled
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            report = michal.keyboard;
            oscard = michal.state;
            tangon = null;
            michal = tangon == report;
            if(!michal) { _fun00008_ip = 75; continue _fun00007 }
 37:
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            golfie = golfie[zuuluu];
            zuuluu = undefined;
            zuuluu = option.bind(zuuluu)(golfie);
            zuuluu = zuuluu.PortalKeyboardState;
            zuuluu = zuuluu.CLOSED;
            michal = oscard === zuuluu;
 75:
            if(michal) { _fun00008_ip = 107; continue _fun00007 }
 78:
            oscard = tangon == report;
            michal = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 95; continue _fun00007 }
 89:
            zuuluu = report.handlerId;
 95:
            if(!(tangon == zuuluu)) { _fun00008_ip = 107; continue _fun00007 }
 99:
            entity = _closure1_slot3;
            entity = entity.bind(michal)();
 107:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['closePortalKeyboardIfUnhandled'] = tangon;
    michal = function() { // Original name: closePortalKeyboardRequest
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getField;
            entity = 'state';
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot0;
            entity = _closure1_slot1;
            golfie = 1;
            michal = entity[golfie];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            michal = michal.PortalKeyboardState;
            michal = michal.CLOSED;
            michal = tangon !== michal;
            if(!michal) { _fun00010_ip = 96; continue _fun00009 }
 63:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(entity)(zuuluu);
            zuuluu = zuuluu.PortalKeyboardState;
            zuuluu = zuuluu.REQUEST_CLOSE;
            michal = tangon !== zuuluu;
 96:
            if(!michal) { _fun00010_ip = 149; continue _fun00009 }
 99:
            tangon = _closure1_slot2;
            zuuluu = tangon.setState;
            michal = {};
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golfie];
            report = oscard.bind(entity)(report);
            report = report.PortalKeyboardState;
            report = report.REQUEST_CLOSE;
            michal['state'] = report;
            michal = zuuluu.bind(tangon)(michal);
 149:
            return entity;
        }
    };
    zuuluu['closePortalKeyboardRequest'] = michal;
    return entity;
})();