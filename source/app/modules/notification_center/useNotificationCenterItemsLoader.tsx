// app/modules/notification_center/useNotificationCenterItemsLoader.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = golf[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.ReadStateTypes;
    var _closure1_slot9 = tango;
    tango = function(argFoo) { // Original name: useNotificationCenterItemsLoader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            output = entity.isFocused;
            var _closure2_slot0 = output;
            source = entity.navigatedAway;
            var _closure2_slot1 = source;
            update = entity.isDesktop;
            var _closure2_slot2 = update;
            backup = entity.withMentions;
            report = undefined;
            if(!(backup === report)) { _fun00002_ip = 49; continue _fun00001 }
 47:
            backup = false;
 49:
            var _closure2_slot3 = backup;
            entity = entity.initialPageSize;
            var _closure2_slot4 = entity;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            foxtrot = _closure1_slot0;
            echo = _closure1_slot2;
            romeo = 7;
            mike = echo[romeo];
            golf = foxtrot.bind(report)(mike);
            oscar = golf.useStateFromStores;
            mike = _closure1_slot8;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                mike = _closure1_slot8;
                entity = mike.shouldReload;
                entity = entity.bind(mike)();
                return entity;
            };
            result = oscar.bind(golf)(tango, mike);
            _closure2_slot5 = result;
            yankee = _closure1_slot5;
            mike = yankee.useRef;
            tango = false;
            mike = mike.bind(yankee)(tango);
            _closure2_slot6 = mike;
            mike = yankee.useState;
            oscar = mike.bind(yankee)(tango);
            tango = _closure1_slot4;
            mike = 2;
            oscar = tango.bind(report)(oscar, mike);
            mike = 0;
            tango = oscar[mike];
            mike = 1;
            mike = oscar[mike];
            _closure2_slot7 = mike;
            mike = echo[romeo];
            options = foxtrot.bind(report)(mike);
            golf = options.useStateFromStoresObject;
            mike = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                entity = {};
                mike = _closure1_slot7;
                zulu = mike.initialized;
                entity['initialized'] = zulu;
                zulu = mike.loading;
                entity['loading'] = zulu;
                zulu = mike.items;
                entity['items'] = zulu;
                zulu = mike.hasMore;
                entity['hasMore'] = zulu;
                zulu = mike.cursor;
                entity['cursor'] = zulu;
                mike = mike.errored;
                entity['errored'] = mike;
                return entity;
            };
            mike = golf.bind(options)(oscar, mike);
            verify = mike.initialized;
            _closure2_slot8 = verify;
            options = mike.loading;
            golf = mike.items;
            _closure2_slot9 = golf;
            oscar = mike.hasMore;
            _closure2_slot10 = oscar;
            kilo = mike.cursor;
            _closure2_slot11 = kilo;
            mike = mike.errored;
            _closure2_slot12 = mike;
            romeo = echo[romeo];
            control = foxtrot.bind(report)(romeo);
            sizing = control.useStateFromStoresObject;
            romeo = _closure1_slot6;
            foxtrot = new Array(1);
            foxtrot[0] = romeo;
            romeo = function() {
                entity = {};
                mike = _closure1_slot6;
                zulu = mike.everyoneFilter;
                entity['everyoneFilter'] = zulu;
                mike = mike.roleFilter;
                entity['roleFilter'] = mike;
                return entity;
            };
            romeo = sizing.bind(control)(foxtrot, romeo);
            foxtrot = romeo.roleFilter;
            _closure2_slot13 = foxtrot;
            romeo = romeo.everyoneFilter;
            _closure2_slot14 = romeo;
            vacuum = yankee.useEffect;
            control = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.setNotificationCenterActive;
                entity = true;
                entity = mike.bind(zulu)(entity);
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.setNotificationCenterActive;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                return entity;
            };
            sizing = new Array(0);
            sizing = vacuum.bind(yankee)(control, sizing);
            vacuum = yankee.useEffect;
            control = new Array(2);
            control[0] = output;
            control[1] = verify;
            sizing = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot8;
                    if(!entity) { _fun00004_ip = 14; continue _fun00003 }
 10:
                    entity = _closure2_slot0;
 14:
                    if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 17:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.ackUserFeature;
                    entity = _closure1_slot9;
                    entity = entity.NOTIFICATION_CENTER;
                    entity = mike.bind(zulu)(entity);
 63:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = vacuum.bind(yankee)(sizing, control);
            sizing = _closure1_slot1;
            offset = 10;
            offset = echo[offset];
            offset = sizing.bind(report)(offset);
            offset = offset.bind(report)();
            _closure2_slot15 = offset;
            echo = yankee.useEffect;
            sizing = new Array(5);
            sizing[0] = source;
            sizing[1] = golf;
            sizing[2] = update;
            sizing[3] = offset;
            sizing[4] = mike;
            offset = function() {
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = _closure2_slot2;
                        if(entity) { _fun00006_ip = 73; continue _fun00005 }
 10:
                        entity = _closure2_slot1;
                        if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 17:
                        mike = _closure2_slot9;
                        zulu = mike.length;
                        mike = 100;
                        entity = zulu > mike;
 33:
                        if(!entity) { _fun00006_ip = 151; continue _fun00005 }
 36:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.resetNotificationCenter;
                        entity = entity.bind(mike)();
                        _fun00006_ip = 151; continue _fun00005;
 73:
                        entity = _closure2_slot15;
                        zulu = undefined;
                        entity = entity.bind(zulu)();
                        entity = !entity;
                        if(!entity) { _fun00006_ip = 115; continue _fun00005 }
 89:
                        mike = _closure2_slot12;
                        if(mike) { _fun00006_ip = 112; continue _fun00005 }
 96:
                        tango = _closure2_slot9;
                        report = tango.length;
                        tango = 100;
                        mike = report > tango;
 112:
                        entity = mike;
 115:
                        if(!entity) { _fun00006_ip = 151; continue _fun00005 }
 118:
                        mike = _closure1_slot0;
                        tango = _closure1_slot2;
                        entity = 8;
                        entity = tango[entity];
                        mike = mike.bind(zulu)(entity);
                        entity = mike.resetNotificationCenter;
                        entity = entity.bind(mike)();
 151:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            offset = echo.bind(yankee)(offset, sizing);
            sizing = yankee.useEffect;
            offset = new Array(7);
            offset[0] = verify;
            offset[1] = result;
            offset[2] = output;
            offset[3] = backup;
            offset[4] = foxtrot;
            offset[5] = romeo;
            offset[6] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot8;
                    entity = !entity;
                    if(entity) { _fun00008_ip = 27; continue _fun00007 }
 13:
                    mike = _closure2_slot5;
                    if(!mike) { _fun00008_ip = 24; continue _fun00007 }
 20:
                    mike = _closure2_slot0;
 24:
                    entity = mike;
 27:
                    if(!entity) { _fun00008_ip = 129; continue _fun00007 }
 30:
                    zulu = _closure1_slot0;
                    entity = _closure1_slot2;
                    oscar = 8;
                    mike = entity[oscar];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.fetchNotificationCenterItems;
                    entity = {};
                    golf = _closure2_slot4;
                    report = null;
                    if(!(report == golf)) { _fun00008_ip = 88; continue _fun00007 }
 73:
                    golf = _closure2_slot3;
                    report = 20;
                    if(!golf) { _fun00008_ip = 86; continue _fun00007 }
 83:
                    report = oscar;
 86:
                    _fun00008_ip = 92; continue _fun00007;
 88:
                    report = _closure2_slot4;
 92:
                    entity['limit'] = report;
                    report = _closure2_slot3;
                    entity['with_mentions'] = report;
                    report = _closure2_slot13;
                    entity['roles_filter'] = report;
                    tango = _closure2_slot14;
                    entity['everyone_filter'] = tango;
                    entity = mike.bind(zulu)(entity);
 129:
                    entity = undefined;
                    return entity;
                }
            };
            entity = sizing.bind(yankee)(entity, offset);
            offset = yankee.useCallback;
            entity = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00010_ip = 230; continue _fun00009 }
 10:
                            mike = _closure2_slot6;
                            mike = mike.current;
                            if(mike) { _fun00010_ip = 32; continue _fun00009 }
 25:
                            tango = _closure2_slot8;
                            mike = !tango;
 32:
                            if(mike) { _fun00010_ip = 42; continue _fun00009 }
 35:
                            tango = _closure2_slot10;
                            mike = !tango;
 42:
                            if(mike) { _fun00010_ip = 55; continue _fun00009 }
 45:
                            report = _closure2_slot11;
                            tango = null;
                            mike = tango == report;
 55:
                            if(mike) { _fun00010_ip = 74; continue _fun00009 }
 58:
                            tango = argFoo;
                            tango = !tango;
                            if(!tango) { _fun00010_ip = 71; continue _fun00009 }
 67:
                            tango = _closure2_slot12;
 71:
                            mike = tango;
 74:
                            if(mike) { _fun00010_ip = 225; continue _fun00009 }
 80:
                            mike = _closure2_slot6;
                            tango = true;
                            mike['current'] = tango;
                            mike = _closure2_slot7;
                            report = undefined;
                            mike = mike.bind(report)(tango);
                            tango = _closure1_slot0;
                            mike = _closure1_slot2;
                            options = 8;
                            mike = mike[options];
                            golf = tango.bind(report)(mike);
                            oscar = golf.fetchNotificationCenterItems;
                            tango = {};
                            mike = _closure2_slot11;
                            tango['after'] = mike;
                            verify = _closure2_slot3;
                            tango['with_mentions'] = verify;
                            mike = _closure2_slot13;
                            tango['roles_filter'] = mike;
                            mike = _closure2_slot14;
                            tango['everyone_filter'] = mike;
                            mike = 20;
                            if(!verify) { _fun00010_ip = 179; continue _fun00009 }
 176:
                            mike = options;
 179:
                            tango['limit'] = mike;
                            mike = function() {
                                mike = _closure2_slot6;
                                entity = false;
                                mike['current'] = entity;
                                entity = undefined;
                                return entity;
                            };
                            mike = oscar.bind(golf)(tango, mike);
                            SaveGenerator(address=203);
 201:
                            return mike;
 203:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun00010_ip = 222; continue _fun00009 }
 209:
                            tango = _closure2_slot7;
                            zulu = false;
                            zulu = tango.bind(report)(zulu);
                            _fun00010_ip = 225; continue _fun00009;
 222:
                            return mike;
 225:
                            mike = undefined;
                            return mike;
 230:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            report = entity.bind(report)();
            entity = new Array(7);
            entity[0] = verify;
            entity[1] = oscar;
            entity[2] = kilo;
            entity[3] = mike;
            entity[4] = backup;
            entity[5] = foxtrot;
            entity[6] = romeo;
            report = offset.bind(yankee)(report, entity);
            entity = {};
            entity['initialized'] = verify;
            entity['loading'] = options;
            entity['items'] = golf;
            entity['hasMore'] = oscar;
            entity['loadMore'] = report;
            entity['loadingMore'] = tango;
            zulu = function(argFoo) { // Original name: setReadNotifItemToAcked
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = argFoo;
                    entity = mike.acked;
                    if(entity) { _fun00012_ip = 20; continue _fun00011 }
 12:
                    entity = true;
                    mike['acked'] = entity;
 20:
                    entity = undefined;
                    return entity;
                }
            };
            entity['setReadNotifItemToAcked'] = zulu;
            entity['errored'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/notification_center/useNotificationCenterItemsLoader.tsx';
    report = oscar.bind(golf)(report);
    report = 8;
    zulu['PAGE_SIZE_WITH_MENTIONS'] = report;
    report = 20;
    zulu['PAGE_SIZE'] = report;
    zulu['useNotificationCenterItemsLoader'] = tango;
    mike = function() {
        zulu = _closure1_slot10;
        mike = undefined;
        entity = {'isFocused': true, 'isDesktop': true};
        entity = zulu.bind(mike)(entity);
        report = entity.initialized;
        tango = entity.loading;
        oscar = entity.items;
        zulu = entity.hasMore;
        mike = entity.loadMore;
        entity = {};
        entity['initialized'] = report;
        entity['loading'] = tango;
        report = oscar.filter;
        tango = function(argFoo) {
            entity = argFoo;
            mike = entity.kind;
            entity = 'notification-center-item';
            entity = entity === mike;
            return entity;
        };
        tango = report.bind(oscar)(tango);
        entity['items'] = tango;
        entity['hasMore'] = zulu;
        entity['loadMore'] = mike;
        return entity;
    };
    zulu['useDesktopNotificationCenterItemsLoader'] = mike;
    return entity;
})();