// app/modules/keyboard/native/PortalKeyboard.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    report = option[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot2 = tangon;
    report = {};
    tangon = 'empty';
    report['EMPTY'] = tangon;
    tangon = 'request_open';
    report['REQUEST_OPEN'] = tangon;
    tangon = 'opening';
    report['OPENING'] = tangon;
    tangon = 'open';
    report['OPEN'] = tangon;
    tangon = 'request_close';
    report['REQUEST_CLOSE'] = tangon;
    tangon = 'closing';
    report['CLOSING'] = tangon;
    tangon = 'closed';
    report['CLOSED'] = tangon;
    var _closure1_slot3 = report;
    tangon = 2;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.create;
    tangon = function() {
        entity = {};
        michal = null;
        entity['keyboard'] = michal;
        michal = _closure1_slot3;
        michal = michal.EMPTY;
        entity['state'] = michal;
        michal = new Array(0);
        entity['renderers'] = michal;
        return entity;
    };
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot4 = tangon;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/keyboard/native/PortalKeyboard.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['PortalKeyboardState'] = report;
    zuuluu['usePortalKeyboardStore'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: openPortalKeyboard
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    michal = entity.keyboard;
                    zuuluu = null;
                    report = zuuluu == michal;
                    option = undefined;
                    tangon = undefined;
                    if(report) { _fun00002_ip = 27; continue _fun00001 }
 22:
                    tangon = michal.type;
 27:
                    michal = _closure2_slot0;
                    if(!(tangon === michal)) { _fun00002_ip = 125; continue _fun00001 }
 38:
                    michal = entity.keyboard;
                    tangon = zuuluu == michal;
                    zuuluu = undefined;
                    if(tangon) { _fun00002_ip = 58; continue _fun00001 }
 53:
                    zuuluu = michal.channelId;
 58:
                    michal = _closure2_slot1;
                    if(!(zuuluu === michal)) { _fun00002_ip = 125; continue _fun00001 }
 66:
                    tangon = entity.state;
                    michal = _closure1_slot3;
                    michal = michal.REQUEST_OPEN;
                    michal = tangon === michal;
                    if(michal) { _fun00002_ip = 105; continue _fun00001 }
 91:
                    oscard = _closure1_slot3;
                    oscard = oscard.OPENING;
                    michal = tangon === oscard;
 105:
                    if(michal) { _fun00002_ip = 122; continue _fun00001 }
 108:
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu.OPEN;
                    michal = tangon === zuuluu;
 122:
                    if(michal) { _fun00002_ip = 213; continue _fun00001 }
 125:
                    michal = {};
                    tangon = {};
                    golfie = _closure1_slot0;
                    verify = _closure1_slot1;
                    oscard = 4;
                    oscard = verify[oscard];
                    golfie = golfie.bind(option)(oscard);
                    oscard = golfie.v4;
                    oscard = oscard.bind(golfie)();
                    tangon['id'] = oscard;
                    oscard = _closure2_slot0;
                    tangon['type'] = oscard;
                    oscard = _closure2_slot1;
                    tangon['channelId'] = oscard;
                    report = _closure2_slot2;
                    tangon['chatInputRef'] = report;
                    michal['keyboard'] = tangon;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu.REQUEST_OPEN;
                    michal['state'] = zuuluu;
                    entity = michal;
 213:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['openPortalKeyboard'] = tangon;
    tangon = function(argFoo) { // Original name: registerPortalKeyboardRenderer
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
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
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.batchUpdates;
            michal = function() {
                zuuluu = _closure1_slot4;
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
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        return entity;
    };
    zuuluu['registerPortalKeyboardRenderer'] = tangon;
    tangon = function(argFoo) { // Original name: handlePortalKeyboardOpen
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    zuuluu = report.keyboard;
                    michal = null;
                    entity = report;
                    if(!(michal != zuuluu)) { _fun00006_ip = 99; continue _fun00005 }
 18:
                    michal = report.keyboard;
                    zuuluu = michal.handlerId;
                    michal = _closure2_slot0;
                    entity = report;
                    if(!(zuuluu !== michal)) { _fun00006_ip = 99; continue _fun00005 }
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
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu.OPEN;
                    michal['state'] = zuuluu;
                    entity = michal;
 99:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['handlePortalKeyboardOpen'] = tangon;
    tangon = function() { // Original name: closePortalKeyboard
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    report = tangon.state;
                    entity = _closure1_slot3;
                    michal = entity.CLOSED;
                    entity = tangon;
                    if(!(report !== michal)) { _fun00008_ip = 84; continue _fun00007 }
 28:
                    report = tangon.state;
                    michal = _closure1_slot3;
                    michal = michal.REQUEST_CLOSE;
                    entity = tangon;
                    if(!(report !== michal)) { _fun00008_ip = 84; continue _fun00007 }
 50:
                    michal = {};
                    golfie = michal;
                    oscard = tangon;
                    tangon = copyDataProperties(golfie, oscard);
                    zuuluu = _closure1_slot3;
                    tangon = zuuluu.REQUEST_CLOSE;
                    zuuluu = 'state';
                    michal[zuuluu] = tangon;
                    entity = michal;
 84:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['closePortalKeyboard'] = tangon;
    tangon = function() { // Original name: closeUnhandledPortalKeyboard
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    report = zuuluu.keyboard;
                    tangon = null;
                    if(!(tangon == report)) { _fun00010_ip = 40; continue _fun00009 }
 15:
                    oscard = zuuluu.state;
                    entity = _closure1_slot3;
                    michal = entity.CLOSED;
                    entity = zuuluu;
                    if(!(oscard !== michal)) { _fun00010_ip = 108; continue _fun00009 }
 40:
                    oscard = tangon == report;
                    michal = undefined;
                    if(oscard) { _fun00010_ip = 55; continue _fun00009 }
 49:
                    michal = report.handlerId;
 55:
                    entity = zuuluu;
                    if(!(tangon == michal)) { _fun00010_ip = 108; continue _fun00009 }
 62:
                    michal = {};
                    option = michal;
                    golfie = zuuluu;
                    zuuluu = copyDataProperties(option, golfie);
                    zuuluu = _closure1_slot3;
                    report = zuuluu.CLOSED;
                    zuuluu = 'state';
                    michal[zuuluu] = report;
                    zuuluu = 'keyboard';
                    michal[zuuluu] = tangon;
                    entity = michal;
 108:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['closeUnhandledPortalKeyboard'] = tangon;
    tangon = 'default';
    zuuluu['PORTAL_HOST_NAME_DEFAULT'] = tangon;
    tangon = 'modal';
    zuuluu['PORTAL_HOST_NAME_MODAL'] = tangon;
    tangon = function(argFoo) { // Original name: PortalKeyboard
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 5;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useIsModalOpen;
            michal = michal.bind(zuuluu)();
            zuuluu = 'default';
            oscard = zuuluu;
            if(!michal) { _fun00012_ip = 93; continue _fun00011 }
 53:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 6;
            michal = option[michal];
            golfie = golfie.bind(tangon)(michal);
            michal = golfie.isIOS;
            michal = michal.bind(golfie)();
            oscard = zuuluu;
            if(!michal) { _fun00012_ip = 93; continue _fun00011 }
 89:
            oscard = 'modal';
 93:
            zuuluu = _closure1_slot2;
            michal = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 7;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Portal;
            entity = {};
            entity['hostName'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['PortalKeyboard'] = tangon;
    michal = function(argFoo) { // Original name: PortalKeyboardHost
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            report = entity.name;
            tangon = undefined;
            if(!(report === tangon)) { _fun00014_ip = 18; continue _fun00013 }
 14:
            report = 'default';
 18:
            zuuluu = _closure1_slot2;
            michal = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 7;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.PortalHost;
            entity = {};
            entity['name'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['PortalKeyboardHost'] = michal;
    return entity;
})();