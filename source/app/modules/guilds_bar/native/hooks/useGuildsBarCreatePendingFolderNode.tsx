// app/modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useGuildsBarCreatePendingFolderNode
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            tango = report[mike];
            golf = undefined;
            offset = zulu.bind(golf)(tango);
            verify = offset.useStateFromStores;
            tango = _closure1_slot4;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                entity = _closure1_slot4;
                entity = entity.hasFetchedRequestToJoinGuilds;
                return entity;
            };
            verify = verify.bind(offset)(oscar, tango);
            var _closure2_slot0 = verify;
            oscar = _closure1_slot1;
            tango = 4;
            tango = report[tango];
            tango = oscar.bind(golf)(tango);
            tango = tango.bind(golf)();
            mike = report[mike];
            oscar = zulu.bind(golf)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot5;
                mike = zulu.isFolderExpanded;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.SpecialGuildsNodeIds;
                entity = entity.PENDING_JOIN_REQUESTS_FOLDER;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = report.bind(oscar)(zulu, mike);
            oscar = _closure1_slot3;
            report = oscar.useEffect;
            mike = new Array(1);
            mike[0] = verify;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot0;
                    if(entity) { _fun00010_ip = 45; continue _fun00009 }
 10:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.fetchRequestToJoinGuilds;
                    entity = entity.bind(mike)();
 45:
                    entity = undefined;
                    return entity;
                }
            };
            entity = report.bind(oscar)(entity, mike);
            mike = tango.length;
            entity = 0;
            if(!(!(mike > entity))) { _fun00008_ip = 177; continue _fun00007 }
 161:
            entity = {'expanded': false, 'pendingFolderNode': null};
            return entity;
 177:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            oscar = 7;
            entity = foxtrot[oscar];
            report = romeo.bind(golf)(entity);
            mike = report.createFolderNode;
            entity = {};
            verify = 5;
            verify = foxtrot[verify];
            verify = romeo.bind(golf)(verify);
            verify = verify.SpecialGuildsNodeIds;
            verify = verify.PENDING_JOIN_REQUESTS_FOLDER;
            entity['folderId'] = verify;
            verify = 8;
            offset = foxtrot[verify];
            offset = romeo.bind(golf)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(golf)(verify);
            verify = verify.t;
            verify = verify.scsU+v;
            verify = offset.bind(yankee)(verify);
            entity['folderName'] = verify;
            entity['expanded'] = zulu;
            entity['guildIds'] = tango;
            mike = mike.bind(report)(entity);
            entity = _closure1_slot6;
            report = entity.bind(golf)(tango);
            tango = report.bind(golf)();
            entity = tango.done;
            if(entity) { _fun00008_ip = 391; continue _fun00007 }
 322:
            foxtrot = tango.value;
            offset = mike.children;
            verify = offset.push;
            yankee = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscar];
            romeo = yankee.bind(golf)(entity);
            yankee = romeo.createGuildNode;
            entity = mike.id;
            entity = yankee.bind(romeo)(foxtrot, entity);
            entity = verify.bind(offset)(entity);
            verify = report.bind(golf)();
            entity = verify.done;
            tango = verify;
            if(!entity) { _fun00008_ip = 322; continue _fun00007 }
 391:
            entity = {};
            entity['expanded'] = zulu;
            entity['pendingFolderNode'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();