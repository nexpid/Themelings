// app/modules/keyboard/native/PortalKeyboard.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    report = options[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(report);
    tango = 1;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot2 = tango;
    report = {};
    tango = 'empty';
    report['EMPTY'] = tango;
    tango = 'request_open';
    report['REQUEST_OPEN'] = tango;
    tango = 'opening';
    report['OPENING'] = tango;
    tango = 'open';
    report['OPEN'] = tango;
    tango = 'request_close';
    report['REQUEST_CLOSE'] = tango;
    tango = 'closing';
    report['CLOSING'] = tango;
    tango = 'closed';
    report['CLOSED'] = tango;
    var _closure1_slot3 = report;
    tango = 2;
    tango = options[tango];
    verify = golf.bind(entity)(tango);
    oscar = verify.create;
    tango = function() {
        entity = {};
        mike = null;
        entity['keyboard'] = mike;
        mike = _closure1_slot3;
        mike = mike.EMPTY;
        entity['state'] = mike;
        mike = new Array(0);
        entity['renderers'] = mike;
        return entity;
    };
    tango = oscar.bind(verify)(tango);
    var _closure1_slot4 = tango;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/keyboard/native/PortalKeyboard.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['PortalKeyboardState'] = report;
    zulu['usePortalKeyboardStore'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: openPortalKeyboard
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun54269: for(var _fun54269_ip = 0; ; ) switch(_fun54269_ip) {
 0:
                    entity = argFoo;
                    mike = entity.keyboard;
                    zulu = null;
                    report = zulu == mike;
                    options = undefined;
                    tango = undefined;
                    if(report) { _fun54269_ip = 27; continue _fun54269 }
 22:
                    tango = mike.type;
 27:
                    mike = _closure2_slot0;
                    if(!(tango === mike)) { _fun54269_ip = 125; continue _fun54269 }
 38:
                    mike = entity.keyboard;
                    tango = zulu == mike;
                    zulu = undefined;
                    if(tango) { _fun54269_ip = 58; continue _fun54269 }
 53:
                    zulu = mike.channelId;
 58:
                    mike = _closure2_slot1;
                    if(!(zulu === mike)) { _fun54269_ip = 125; continue _fun54269 }
 66:
                    tango = entity.state;
                    mike = _closure1_slot3;
                    mike = mike.REQUEST_OPEN;
                    mike = tango === mike;
                    if(mike) { _fun54269_ip = 105; continue _fun54269 }
 91:
                    oscar = _closure1_slot3;
                    oscar = oscar.OPENING;
                    mike = tango === oscar;
 105:
                    if(mike) { _fun54269_ip = 122; continue _fun54269 }
 108:
                    zulu = _closure1_slot3;
                    zulu = zulu.OPEN;
                    mike = tango === zulu;
 122:
                    if(mike) { _fun54269_ip = 213; continue _fun54269 }
 125:
                    mike = {};
                    tango = {};
                    golf = _closure1_slot0;
                    verify = _closure1_slot1;
                    oscar = 4;
                    oscar = verify[oscar];
                    golf = golf.bind(options)(oscar);
                    oscar = golf.v4;
                    oscar = oscar.bind(golf)();
                    tango['id'] = oscar;
                    oscar = _closure2_slot0;
                    tango['type'] = oscar;
                    oscar = _closure2_slot1;
                    tango['channelId'] = oscar;
                    report = _closure2_slot2;
                    tango['chatInputRef'] = report;
                    mike['keyboard'] = tango;
                    zulu = _closure1_slot3;
                    zulu = zulu.REQUEST_OPEN;
                    mike['state'] = zulu;
                    entity = mike;
 213:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['openPortalKeyboard'] = tango;
    tango = function(argFoo) { // Original name: registerPortalKeyboardRenderer
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun54272: for(var _fun54272_ip = 0; ; ) switch(_fun54272_ip) {
 0:
                    zulu = argFoo;
                    report = zulu.renderers;
                    mike = report.includes;
                    entity = _closure2_slot0;
                    mike = mike.bind(report)(entity);
                    entity = zulu;
                    if(mike) { _fun54272_ip = 77; continue _fun54272 }
 32:
                    mike = {};
                    options = zulu.renderers;
                    zulu = new Array(1);
                    golf = 0;
                    verify = zulu;
                    report = arraySpread(verify, options, golf);
                    tango = _closure2_slot0;
                    zulu[report] = tango;
                    tango = 1;
                    tango = report + tango;
                    mike['renderers'] = zulu;
                    entity = mike;
 77:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.batchUpdates;
            mike = function() {
                zulu = _closure1_slot4;
                mike = zulu.setState;
                entity = function(argFoo) {
                    entity = {};
                    mike = argFoo;
                    tango = mike.renderers;
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        mike = _closure2_slot0;
                        entity = argFoo;
                        entity = entity !== mike;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    entity['renderers'] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        return entity;
    };
    zulu['registerPortalKeyboardRenderer'] = tango;
    tango = function(argFoo) { // Original name: handlePortalKeyboardOpen
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun54279: for(var _fun54279_ip = 0; ; ) switch(_fun54279_ip) {
 0:
                    report = argFoo;
                    zulu = report.keyboard;
                    mike = null;
                    entity = report;
                    if(!(mike != zulu)) { _fun54279_ip = 99; continue _fun54279 }
 18:
                    mike = report.keyboard;
                    zulu = mike.handlerId;
                    mike = _closure2_slot0;
                    entity = report;
                    if(!(zulu !== mike)) { _fun54279_ip = 99; continue _fun54279 }
 44:
                    mike = {};
                    zulu = {};
                    oscar = report.keyboard;
                    golf = zulu;
                    report = copyDataProperties(golf, oscar);
                    report = _closure2_slot0;
                    tango = 'handlerId';
                    zulu[tango] = report;
                    mike['keyboard'] = zulu;
                    zulu = _closure1_slot3;
                    zulu = zulu.OPEN;
                    mike['state'] = zulu;
                    entity = mike;
 99:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['handlePortalKeyboardOpen'] = tango;
    tango = function() { // Original name: closePortalKeyboard
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun54282: for(var _fun54282_ip = 0; ; ) switch(_fun54282_ip) {
 0:
                    tango = argFoo;
                    report = tango.state;
                    entity = _closure1_slot3;
                    mike = entity.CLOSED;
                    entity = tango;
                    if(!(report !== mike)) { _fun54282_ip = 84; continue _fun54282 }
 28:
                    report = tango.state;
                    mike = _closure1_slot3;
                    mike = mike.REQUEST_CLOSE;
                    entity = tango;
                    if(!(report !== mike)) { _fun54282_ip = 84; continue _fun54282 }
 50:
                    mike = {};
                    golf = mike;
                    oscar = tango;
                    tango = copyDataProperties(golf, oscar);
                    zulu = _closure1_slot3;
                    tango = zulu.REQUEST_CLOSE;
                    zulu = 'state';
                    mike[zulu] = tango;
                    entity = mike;
 84:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['closePortalKeyboard'] = tango;
    tango = function() { // Original name: closeUnhandledPortalKeyboard
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.batchUpdates;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.setState;
            entity = function(argFoo) {
                _fun54285: for(var _fun54285_ip = 0; ; ) switch(_fun54285_ip) {
 0:
                    zulu = argFoo;
                    report = zulu.keyboard;
                    tango = null;
                    if(!(tango == report)) { _fun54285_ip = 40; continue _fun54285 }
 15:
                    oscar = zulu.state;
                    entity = _closure1_slot3;
                    mike = entity.CLOSED;
                    entity = zulu;
                    if(!(oscar !== mike)) { _fun54285_ip = 108; continue _fun54285 }
 40:
                    oscar = tango == report;
                    mike = undefined;
                    if(oscar) { _fun54285_ip = 55; continue _fun54285 }
 49:
                    mike = report.handlerId;
 55:
                    entity = zulu;
                    if(!(tango == mike)) { _fun54285_ip = 108; continue _fun54285 }
 62:
                    mike = {};
                    options = mike;
                    golf = zulu;
                    zulu = copyDataProperties(options, golf);
                    zulu = _closure1_slot3;
                    report = zulu.CLOSED;
                    zulu = 'state';
                    mike[zulu] = report;
                    zulu = 'keyboard';
                    mike[zulu] = tango;
                    entity = mike;
 108:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['closeUnhandledPortalKeyboard'] = tango;
    tango = 'default';
    zulu['PORTAL_HOST_NAME_DEFAULT'] = tango;
    tango = 'modal';
    zulu['PORTAL_HOST_NAME_MODAL'] = tango;
    tango = function(argFoo) { // Original name: PortalKeyboard
        _fun54286: for(var _fun54286_ip = 0; ; ) switch(_fun54286_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 5;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useIsModalOpen;
            mike = mike.bind(zulu)();
            zulu = 'default';
            oscar = zulu;
            if(!mike) { _fun54286_ip = 93; continue _fun54286 }
 53:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 6;
            mike = options[mike];
            golf = golf.bind(tango)(mike);
            mike = golf.isIOS;
            mike = mike.bind(golf)();
            oscar = zulu;
            if(!mike) { _fun54286_ip = 93; continue _fun54286 }
 89:
            oscar = 'modal';
 93:
            zulu = _closure1_slot2;
            mike = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 7;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Portal;
            entity = {};
            entity['hostName'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['PortalKeyboard'] = tango;
    mike = function(argFoo) { // Original name: PortalKeyboardHost
        _fun54287: for(var _fun54287_ip = 0; ; ) switch(_fun54287_ip) {
 0:
            entity = argFoo;
            report = entity.name;
            tango = undefined;
            if(!(report === tango)) { _fun54287_ip = 18; continue _fun54287 }
 14:
            report = 'default';
 18:
            zulu = _closure1_slot2;
            mike = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 7;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PortalHost;
            entity = {};
            entity['name'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['PortalKeyboardHost'] = mike;
    return entity;
})();