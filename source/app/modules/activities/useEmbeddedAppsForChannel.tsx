// app/modules/activities/useEmbeddedAppsForChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
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
            verify = _closure1_slot9;
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
            golf = _closure1_slot9;
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
    var _closure1_slot8 = entity;
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
    var _closure1_slot9 = entity;
    tango = function(argFoo, argBar) { // Original name: useEmbeddedApps
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            options = argFoo;
            report = argBar;
            var _closure2_slot0 = options;
            var _closure2_slot1 = report;
            zulu = options.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.applicationId;
                return entity;
            };
            tango = zulu.bind(options)(mike);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 6;
            zulu = golf[zulu];
            verify = undefined;
            zulu = oscar.bind(verify)(zulu);
            golf = zulu.bind(verify)(tango);
            var _closure2_slot2 = golf;
            zulu = global;
            oscar = zulu.Set;
            zulu = oscar.prototype;
            tango = Object.create(zulu, {constructor: {value: oscar}});
            sizing = new Array(0);
            output = tango;
            zulu = new output[oscar](sizing, kilo);
            zulu = zulu instanceof Object ? zulu : tango;
            var _closure2_slot3 = zulu;
            tango = _closure1_slot8;
            offset = tango.bind(verify)(options);
            oscar = offset.bind(verify)();
            tango = oscar.done;
            if(tango) { _fun00008_ip = 201; continue _fun00007 }
 124:
            yankee = _closure1_slot8;
            tango = oscar.value;
            tango = tango.userIds;
            romeo = yankee.bind(verify)(tango);
            yankee = romeo.bind(verify)();
            tango = yankee.done;
            if(tango) { _fun00008_ip = 186; continue _fun00007 }
 156:
            foxtrot = yankee.value;
            tango = zulu.add;
            tango = tango.bind(zulu)(foxtrot);
            foxtrot = romeo.bind(verify)();
            tango = foxtrot.done;
            yankee = foxtrot;
            if(!tango) { _fun00008_ip = 156; continue _fun00007 }
 186:
            yankee = offset.bind(verify)();
            tango = yankee.done;
            oscar = yankee;
            if(!tango) { _fun00008_ip = 124; continue _fun00007 }
 201:
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 4;
            tango = offset[tango];
            offset = oscar.bind(verify)(tango);
            verify = offset.useStateFromStoresArray;
            tango = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = new Array(0);
                    zulu = _closure1_slot8;
                    mike = _closure2_slot3;
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun00010_ip = 82; continue _fun00009 }
 37:
                    verify = zulu.value;
                    golf = entity.push;
                    options = _closure1_slot5;
                    mike = options.getUser;
                    mike = mike.bind(options)(verify);
                    mike = golf.bind(entity)(mike);
                    golf = tango.bind(report)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun00010_ip = 37; continue _fun00009 }
 82:
                    return entity;
                }
            };
            oscar = verify.bind(offset)(oscar, zulu, tango);
            var _closure2_slot4 = oscar;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                mike = global;
                mike = mike.Map;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                golf = zulu;
                mike = new golf[mike](oscar);
                mike = mike instanceof Object ? mike : zulu;
                var _closure3_slot0 = mike;
                report = _closure2_slot4;
                tango = report.forEach;
                zulu = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tango = argFoo;
                        entity = null;
                        if(!(entity != tango)) { _fun00012_ip = 32; continue _fun00011 }
 9:
                        zulu = _closure3_slot0;
                        mike = zulu.set;
                        entity = tango.id;
                        entity = mike.bind(zulu)(entity, tango);
 32:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = tango.bind(report)(zulu);
                zulu = _closure2_slot0;
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        report = argFoo;
                        mike = _closure2_slot2;
                        entity = argBar;
                        tango = mike[entity];
                        zulu = new Array(0);
                        mike = _closure1_slot8;
                        entity = report.userIds;
                        offset = undefined;
                        verify = mike.bind(offset)(entity);
                        oscar = verify.bind(offset)();
                        mike = oscar.done;
                        entity = null;
                        golf = oscar;
                        oscar = undefined;
                        if(mike) { _fun00014_ip = 147; continue _fun00013 }
 63:
                        foxtrot = golf.value;
                        romeo = _closure3_slot0;
                        mike = romeo.get;
                        foxtrot = mike.bind(romeo)(foxtrot);
                        romeo = oscar;
                        if(!(entity != foxtrot)) { _fun00014_ip = 129; continue _fun00013 }
 89:
                        mike = _closure2_slot1;
                        romeo = oscar;
                        if(!(entity != mike)) { _fun00014_ip = 129; continue _fun00013 }
 100:
                        mike = _closure2_slot1;
                        mike = mike.bind(offset)(foxtrot);
                        romeo = mike;
                        if(!(entity != mike)) { _fun00014_ip = 129; continue _fun00013 }
 116:
                        foxtrot = zulu.push;
                        foxtrot = foxtrot.bind(zulu)(mike);
                        romeo = mike;
 129:
                        foxtrot = verify.bind(offset)();
                        mike = foxtrot.done;
                        oscar = romeo;
                        golf = foxtrot;
                        if(!mike) { _fun00014_ip = 63; continue _fun00013 }
 147:
                        mike = entity == tango;
                        entity = null;
                        if(mike) { _fun00014_ip = 177; continue _fun00013 }
 156:
                        mike = {};
                        mike['embeddedActivity'] = report;
                        mike['application'] = tango;
                        mike['userParticipantAvatarUrls'] = zulu;
                        entity = mike;
 177:
                        return entity;
                    }
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 7;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.isNotNullish;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    options = golf[report];
    options = verify.bind(entity)(options);
    var _closure1_slot6 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.NO_ACTIVITIES;
    var _closure1_slot7 = report;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/activities/useEmbeddedAppsForChannel.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: useEmbeddedAppsForChannel
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot10;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 4;
        report = report[zulu];
        zulu = undefined;
        oscar = oscar.bind(zulu)(report);
        report = oscar.useStateFromStoresArray;
        golf = _closure1_slot6;
        mike = new Array(1);
        mike[0] = golf;
        entity = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = _closure2_slot0;
                zulu = null;
                if(!(zulu != entity)) { _fun00016_ip = 43; continue _fun00015 }
 13:
                entity = _closure2_slot0;
                entity = entity.id;
                if(!(zulu != entity)) { _fun00016_ip = 43; continue _fun00015 }
 26:
                entity = _closure2_slot0;
                zulu = entity.id;
                entity = '';
                if(!(entity === zulu)) { _fun00016_ip = 52; continue _fun00015 }
 43:
                entity = _closure1_slot7;
                _fun00016_ip = 79; continue _fun00015;
 52:
                tango = _closure1_slot6;
                zulu = tango.getEmbeddedActivitiesForChannel;
                mike = _closure2_slot0;
                mike = mike.id;
                entity = zulu.bind(tango)(mike);
 79:
                return entity;
            }
        };
        mike = report.bind(oscar)(mike, entity);
        entity = argBar;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    zulu['default'] = report;
    report = function(argFoo) { // Original name: useEmbeddedAppsByChannel
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot10;
        oscar = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 4;
        zulu = tango[zulu];
        tango = undefined;
        options = oscar.bind(tango)(zulu);
        golf = options.useStateFromStores;
        zulu = _closure1_slot6;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun00018_ip = 22; continue _fun00017 }
 13:
                entity = _closure1_slot7;
                _fun00018_ip = 44; continue _fun00017;
 22:
                tango = _closure1_slot6;
                zulu = tango.getEmbeddedActivitiesForGuild;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 44:
                return entity;
            }
        };
        zulu = golf.bind(options)(oscar, zulu);
        report = report.bind(tango)(zulu);
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            entity = global;
            entity = entity.Map;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            oscar = zulu;
            entity = new oscar[entity](report);
            entity = entity instanceof Object ? entity : zulu;
            var _closure3_slot0 = entity;
            tango = _closure2_slot1;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    oscar = argFoo;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.getEmbeddedActivityLocationChannelId;
                    mike = oscar.embeddedActivity;
                    mike = mike.location;
                    report = zulu.bind(tango)(mike);
                    zulu = null;
                    if(!(zulu != report)) { _fun00020_ip = 106; continue _fun00019 }
 56:
                    golf = _closure3_slot0;
                    tango = golf.get;
                    tango = tango.bind(golf)(report);
                    if(!(zulu == tango)) { _fun00020_ip = 81; continue _fun00019 }
 77:
                    tango = new Array(0);
 81:
                    zulu = tango.push;
                    zulu = zulu.bind(tango)(oscar);
                    zulu = _closure3_slot0;
                    mike = zulu.set;
                    mike = mike.bind(zulu)(report, tango);
 106:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useEmbeddedAppsByChannel'] = report;
    zulu['useEmbeddedApps'] = tango;
    mike = function(argFoo) { // Original name: useEmbeddedAppsWithPresence
        offset = argFoo;
        var _closure2_slot0 = offset;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 4;
        tango = verify[mike];
        golf = undefined;
        oscar = options.bind(golf)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot4;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(1);
        zulu[0] = offset;
        mike = verify[mike];
        mike = options.bind(golf)(mike);
        yankee = mike.statesWillNeverBeEqual;
        foxtrot = function() {
            entity = global;
            entity = entity.Map;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            oscar = zulu;
            entity = new oscar[entity](report);
            entity = entity instanceof Object ? entity : zulu;
            var _closure3_slot0 = entity;
            tango = _closure2_slot0;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    oscar = argFoo;
                    var _closure4_slot0 = oscar;
                    report = _closure1_slot4;
                    tango = report.findActivity;
                    options = null;
                    golf = options == oscar;
                    entity = undefined;
                    zulu = undefined;
                    if(golf) { _fun00022_ip = 70; continue _fun00021 }
 35:
                    golf = oscar.embeddedActivity;
                    verify = golf.userIds;
                    golf = verify.values;
                    verify = golf.bind(verify)();
                    golf = verify.next;
                    golf = golf.bind(verify)();
                    zulu = golf.value;
 70:
                    mike = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            entity = argFoo;
                            mike = entity.application_id;
                            entity = _closure4_slot0;
                            tango = null;
                            oscar = tango == entity;
                            entity = undefined;
                            if(oscar) { _fun00024_ip = 50; continue _fun00023 }
 27:
                            zulu = _closure4_slot0;
                            zulu = zulu.application;
                            tango = tango == zulu;
                            entity = undefined;
                            if(tango) { _fun00024_ip = 50; continue _fun00023 }
 45:
                            entity = zulu.id;
 50:
                            entity = mike === entity;
                            return entity;
                        }
                    };
                    golf = tango.bind(report)(zulu, mike);
                    report = _closure3_slot0;
                    tango = report.set;
                    mike = options == oscar;
                    zulu = undefined;
                    if(mike) { _fun00022_ip = 123; continue _fun00021 }
 104:
                    mike = oscar.application;
                    options = options == mike;
                    zulu = undefined;
                    if(options) { _fun00022_ip = 123; continue _fun00021 }
 118:
                    zulu = mike.id;
 123:
                    mike = {};
                    yankee = mike;
                    offset = oscar;
                    oscar = copyDataProperties(yankee, offset);
                    oscar = 'presenceActivity';
                    mike[oscar] = golf;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        kilo = oscar;
        backup = tango;
        romeo = zulu;
        entity = kilo[report](backup, foxtrot, romeo, yankee, offset);
        return entity;
    };
    zulu['useEmbeddedAppsWithPresence'] = mike;
    return entity;
})();