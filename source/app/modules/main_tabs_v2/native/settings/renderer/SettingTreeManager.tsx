// app/modules/main_tabs_v2/native/settings/renderer/SettingTreeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RendererType;
    var _closure1_slot4 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: SettingTreeManagerCache
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['cache'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'get';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.cache;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'set';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            entity = this;
            zulu = entity.cache;
            mike = argBar;
            entity = argFoo;
            zulu[entity] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = {};
            entity = this;
            entity['cache'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: SettingTreeManager
            zulu = this;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            mike = _closure1_slot5;
            tango = mike.prototype;
            report = Object.create(tango, {constructor: {value: mike}});
            options = report;
            tango = new options[mike](golf);
            tango = tango instanceof Object ? tango : report;
            zulu['highestAncestorCache'] = tango;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['breadcrumbCache'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'transformParent';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                entity = null;
                mike = entity == tango;
                if(mike) { _fun00008_ip = 35; continue _fun00007 }
 12:
                report = 'string';
                zulu = typeof tango;
                mike = tango;
                if(!(report !== zulu)) { _fun00008_ip = 32; continue _fun00007 }
 26:
                zulu = undefined;
                mike = tango.bind(zulu)();
 32:
                entity = mike;
 35:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(8);
        mike[0] = entity;
        entity = {};
        oscar = 'validate';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getAncestors';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                golf = this;
                entity = new Array(0);
                zulu = golf.transformParent;
                options = _closure1_slot0;
                mike = _closure1_slot1;
                report = 3;
                mike = mike[report];
                tango = undefined;
                mike = options.bind(tango)(mike);
                options = mike.SETTING_RENDERER_CONFIG;
                mike = argFoo;
                mike = options[mike];
                mike = mike.parent;
                mike = zulu.bind(golf)(mike);
                zulu = null;
                if(!(zulu != mike)) { _fun00010_ip = 124; continue _fun00009 }
 67:
                options = entity.push;
                options = options.bind(entity)(mike);
                verify = golf.transformParent;
                offset = _closure1_slot0;
                options = _closure1_slot1;
                options = options[report];
                options = offset.bind(tango)(options);
                options = options.SETTING_RENDERER_CONFIG;
                options = options[mike];
                options = options.parent;
                mike = verify.bind(golf)(options);
                if(zulu != mike) { _fun00010_ip = 67; continue _fun00009 }
 124:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'isBlocked';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            tango = argFoo;
            zulu = this;
            mike = argBar;
            var _closure3_slot0 = mike;
            mike = zulu.getAncestors;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.push;
            mike = mike.bind(zulu)(tango);
            mike = zulu.some;
            entity = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getHighestLevelAncestor';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zulu = this;
                mike = zulu.highestAncestorCache;
                entity = mike.get;
                entity = entity.bind(mike)(report);
                oscar = null;
                if(!(oscar == entity)) { _fun00012_ip = 84; continue _fun00011 }
 28:
                mike = zulu.getAncestors;
                tango = mike.bind(zulu)(report);
                golf = tango.length;
                mike = 1;
                mike = golf - mike;
                tango = tango[mike];
                mike = report;
                if(!(oscar != tango)) { _fun00012_ip = 65; continue _fun00011 }
 62:
                mike = tango;
 65:
                tango = zulu.highestAncestorCache;
                zulu = tango.set;
                zulu = zulu.bind(tango)(report, mike);
                return mike;
 84:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getNearestRouteAncestorDataOrSelf';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golf = argFoo;
                tango = this;
                zulu = _closure1_slot0;
                entity = _closure1_slot1;
                oscar = 3;
                entity = entity[oscar];
                report = undefined;
                entity = zulu.bind(report)(entity);
                entity = entity.SETTING_RENDERER_CONFIG;
                entity = entity[golf];
                options = entity.type;
                zulu = _closure1_slot4;
                zulu = zulu.ROUTE;
                if(!(options !== zulu)) { _fun00014_ip = 119; continue _fun00013 }
 60:
                zulu = tango.getAncestors;
                golf = zulu.bind(tango)(golf);
                tango = golf.find;
                zulu = function(argFoo) {
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    zulu = mike.SETTING_RENDERER_CONFIG;
                    mike = argFoo;
                    mike = zulu[mike];
                    mike = mike.type;
                    entity = _closure1_slot4;
                    entity = entity.ROUTE;
                    entity = mike === entity;
                    return entity;
                };
                zulu = tango.bind(golf)(zulu);
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[oscar];
                mike = tango.bind(report)(mike);
                mike = mike.SETTING_RENDERER_CONFIG;
                mike = mike[zulu];
                return mike;
 119:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getBreadcrumbs';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                zulu = this;
                mike = zulu.breadcrumbCache;
                entity = mike.get;
                entity = entity.bind(mike)(report);
                romeo = null;
                if(!(romeo == entity)) { _fun00016_ip = 178; continue _fun00015 }
 31:
                mike = new Array(0);
                oscar = _closure1_slot6;
                tango = zulu.getAncestors;
                tango = tango.bind(zulu)(report);
                offset = undefined;
                verify = oscar.bind(offset)(tango);
                oscar = verify.bind(offset)();
                tango = oscar.done;
                options = 'string';
                golf = 3;
                if(tango) { _fun00016_ip = 159; continue _fun00015 }
 79:
                foxtrot = oscar.value;
                backup = _closure1_slot0;
                tango = _closure1_slot1;
                tango = tango[golf];
                tango = backup.bind(offset)(tango);
                tango = tango.SETTING_RENDERER_CONFIG;
                tango = tango[foxtrot];
                tango = tango.title;
                if(!(romeo != tango)) { _fun00016_ip = 144; continue _fun00015 }
 120:
                backup = typeof tango;
                foxtrot = tango;
                if(!(options !== backup)) { _fun00016_ip = 134; continue _fun00015 }
 130:
                foxtrot = tango.bind(offset)();
 134:
                tango = mike.push;
                tango = tango.bind(mike)(foxtrot);
 144:
                foxtrot = verify.bind(offset)();
                tango = foxtrot.done;
                oscar = foxtrot;
                if(!tango) { _fun00016_ip = 79; continue _fun00015 }
 159:
                tango = zulu.breadcrumbCache;
                zulu = tango.set;
                zulu = zulu.bind(tango)(report, mike);
                return mike;
 178:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'clearCaches';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            zulu = entity.breadcrumbCache;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = entity.highestAncestorCache;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[7] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/renderer/SettingTreeManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();