// app/modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun91525: for(var _fun91525_ip = 0; ; ) switch(_fun91525_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun91525_ip = 51; continue _fun91525 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun91525_ip = 92; continue _fun91525;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun91525_ip = 71; continue _fun91525 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun91526: for(var _fun91526_ip = 0; ; ) switch(_fun91526_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun91526_ip = 76; continue _fun91526;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DISCOVERY_ALL_CATEGORIES_ID;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot12 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: GlobalDiscoveryServersFeaturedSearchManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            tango = _closure1_slot6;
            report = _closure2_slot0;
            zulu = undefined;
            tango = tango.bind(zulu)(oscar, report);
            tango = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = tango.bind(zulu)(oscar, report, entity);
            var _closure3_slot0 = entity;
            tango = {};
            report = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.handleConnectionOpen;
                entity = entity.bind(mike)();
                return entity;
            };
            tango['POST_CONNECTION_OPEN'] = report;
            entity['actions'] = tango;
            tango = global;
            tango = tango.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            romeo = report;
            tango = new romeo[tango](yankee);
            tango = tango instanceof Object ? tango : report;
            entity['queue'] = tango;
            tango = false;
            entity['isFetchEnabled'] = tango;
            tango = function() {
                entity = _closure3_slot0;
                mike = true;
                entity['isFetchEnabled'] = mike;
                zulu = entity.queue;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    _fun91533: for(var _fun91533_ip = 0; ; ) switch(_fun91533_ip) {
 0:
                        tango = argFoo;
                        entity = _closure1_slot11;
                        if(!(tango !== entity)) { _fun91533_ip = 41; continue _fun91533 }
 14:
                        zulu = _closure3_slot0;
                        mike = zulu.fetchCategoryFeaturedGuilds;
                        entity = {};
                        entity['categoryId'] = tango;
                        entity = mike.bind(zulu)(entity);
                        _fun91533_ip = 58; continue _fun91533;
 41:
                        mike = _closure3_slot0;
                        entity = mike.fetchFeaturedGuilds;
                        entity = entity.bind(mike)();
 58:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['handleConnectionOpen'] = tango;
            tango = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun91536: for(var _fun91536_ip = 0; ; ) switch(_fun91536_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun91536_ip = 566; continue _fun91536 }
 13:
                            zulu = _closure3_slot0;
                            zulu = zulu.isFetchEnabled;
                            if(zulu) { _fun91536_ip = 61; continue _fun91536 }
 29:
                            mike = _closure3_slot0;
                            tango = mike.queue;
                            zulu = tango.add;
                            mike = _closure1_slot11;
                            mike = zulu.bind(tango)(mike);
                            _fun91536_ip = 561; continue _fun91536;
 61:
                            zulu = null;
                            oscar = zulu == report;
                            tango = undefined;
                            mike = undefined;
                            if(oscar) { _fun91536_ip = 80; continue _fun91536 }
 74:
                            mike = report.forceRefresh;
 80:
                            zulu = zulu != mike;
                            if(!zulu) { _fun91536_ip = 90; continue _fun91536 }
 87:
                            zulu = mike;
 90:
                            golf = _closure1_slot10;
                            oscar = golf.getLastFetchTimestamp;
                            report = {};
                            options = _closure1_slot11;
                            report['categoryId'] = options;
                            oscar = oscar.bind(golf)(report);
                            if(zulu) { _fun91536_ip = 159; continue _fun91536 }
 122:
                            report = _closure1_slot0;
                            golf = _closure1_slot3;
                            zulu = 9;
                            zulu = golf[zulu];
                            report = report.bind(tango)(zulu);
                            zulu = report.isStaleFeaturedGuilds;
                            zulu = zulu.bind(report)(oscar);
                            if(!zulu) { _fun91536_ip = 561; continue _fun91536 }
 159:
                            oscar = _closure1_slot1;
                            report = _closure1_slot3;
                            zulu = 10;
                            report = report[zulu];
                            golf = oscar.bind(tango)(report);
                            oscar = golf.dispatch;
                            report = {'type': 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START', 'categoryId': null, 'reset': true};
                            options = _closure1_slot11;
                            report['categoryId'] = options;
                            options = true;
                            report = oscar.bind(golf)(report);
 215: // try_start_0
                            foxtrot = _closure1_slot0;
                            backup = _closure1_slot3;
                            report = 11;
                            report = backup[report];
                            report = foxtrot.bind(tango)(report);
                            golf = report.HTTP;
                            oscar = golf.get;
                            report = {};
                            verify = _closure1_slot12;
                            verify = verify.GUILD_DISCOVERY;
                            report['url'] = verify;
                            offset = _closure1_slot1;
                            verify = 12;
                            verify = backup[verify];
                            yankee = offset.bind(tango)(verify);
                            offset = yankee.stringify;
                            verify = {};
                            romeo = 0;
                            verify['offset'] = romeo;
                            romeo = 13;
                            romeo = backup[romeo];
                            romeo = foxtrot.bind(tango)(romeo);
                            romeo = romeo.GlobalDiscoveryServersLimits;
                            romeo = romeo.FEATURED_DEFAULT_LIMIT;
                            verify['limit'] = romeo;
                            verify = offset.bind(yankee)(verify);
                            report['query'] = verify;
                            report['oldFormErrors'] = options;
                            options = false;
                            report['rejectWithError'] = options;
                            report = oscar.bind(golf)(report);
                            SaveGenerator(address=350);
 348:
                            return report;
 350:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(oscar) { _fun91536_ip = 470; continue _fun91536 }
 356:
                            oscar = report.body;
                            verify = oscar.total;
                            oscar = report.body;
                            offset = oscar.guilds;
                            options = offset.map;
                            yankee = _closure1_slot0;
                            oscar = _closure1_slot3;
                            golf = 9;
                            golf = oscar[golf];
                            golf = yankee.bind(tango)(golf);
                            golf = golf.fromDiscoverableGuildServer;
                            offset = options.bind(offset)(golf);
                            golf = _closure1_slot1;
                            oscar = oscar[zulu];
                            options = golf.bind(tango)(oscar);
                            golf = options.dispatch;
                            oscar = {};
                            yankee = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                            oscar['type'] = yankee;
                            yankee = _closure1_slot11;
                            oscar['categoryId'] = yankee;
                            oscar['guilds'] = offset;
                            oscar['total'] = verify;
                            oscar = golf.bind(options)(oscar);
 468: // try_end0
                            _fun91536_ip = 561; continue _fun91536;
 470:
                            return report;
 473: // catch_target0
                            CatchBlockStart(arg_register=8);
                            report = _closure1_slot1;
                            oscar = _closure1_slot3;
                            zulu = oscar[zulu];
                            options = report.bind(tango)(zulu);
                            golf = options.dispatch;
                            zulu = {};
                            report = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                            zulu['type'] = report;
                            report = _closure1_slot11;
                            zulu['categoryId'] = report;
                            zulu['error'] = verify;
                            zulu = golf.bind(options)(zulu);
                            zulu = _closure1_slot2;
                            mike = 14;
                            mike = oscar[mike];
                            tango = zulu.bind(tango)(mike);
                            zulu = tango.trackGuildDiscoveryGetFeaturedGuildsFailed;
                            mike = {};
                            mike['categoryId'] = report;
                            mike = zulu.bind(tango)(mike);
 561:
                            mike = undefined;
                            return mike;
 566:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            tango = tango.bind(zulu)();
            entity['fetchFeaturedGuilds'] = tango;
            mike = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun91540: for(var _fun91540_ip = 0; ; ) switch(_fun91540_ip) {
 0:
                            StartGenerator();
                            mike = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(zulu) { _fun91540_ip = 540; continue _fun91540 }
 13:
                            golf = mike.categoryId;
                            report = mike.forceRefresh;
                            zulu = undefined;
                            if(!(report === zulu)) { _fun91540_ip = 33; continue _fun91540 }
 31:
                            report = false;
 33:
                            SaveGenerator(address=37);
 35:
                            return zulu;
 37:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(tango) { _fun91540_ip = 537; continue _fun91540 }
 46:
                            oscar = _closure3_slot0;
                            oscar = oscar.isFetchEnabled;
                            if(oscar) { _fun91540_ip = 90; continue _fun91540 }
 62:
                            tango = _closure3_slot0;
                            options = tango.queue;
                            oscar = options.add;
                            tango = golf;
                            tango = oscar.bind(options)(tango);
                            _fun91540_ip = 534; continue _fun91540;
 90:
                            verify = _closure1_slot10;
                            options = verify.getLastFetchTimestamp;
                            oscar = {};
                            offset = golf;
                            oscar['categoryId'] = offset;
                            options = options.bind(verify)(oscar);
                            if(report) { _fun91540_ip = 158; continue _fun91540 }
 121:
                            oscar = _closure1_slot0;
                            verify = _closure1_slot3;
                            report = 9;
                            report = verify[report];
                            oscar = oscar.bind(zulu)(report);
                            report = oscar.isStaleFeaturedGuilds;
                            report = report.bind(oscar)(options);
                            if(!report) { _fun91540_ip = 534; continue _fun91540 }
 158:
                            options = _closure1_slot1;
                            oscar = _closure1_slot3;
                            report = 10;
                            oscar = oscar[report];
                            verify = options.bind(zulu)(oscar);
                            options = verify.dispatch;
                            oscar = {'type': 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START', 'categoryId': null, 'reset': true};
                            offset = golf;
                            oscar['categoryId'] = offset;
                            offset = true;
                            oscar = options.bind(verify)(oscar);
 213: // try_start_0
                            options = _closure1_slot0;
                            foxtrot = _closure1_slot3;
                            oscar = 11;
                            oscar = foxtrot[oscar];
                            oscar = options.bind(zulu)(oscar);
                            verify = oscar.HTTP;
                            options = verify.get;
                            oscar = {};
                            yankee = _closure1_slot12;
                            yankee = yankee.GUILD_DISCOVERY;
                            oscar['url'] = yankee;
                            romeo = _closure1_slot1;
                            yankee = 12;
                            yankee = foxtrot[yankee];
                            foxtrot = romeo.bind(zulu)(yankee);
                            romeo = foxtrot.stringify;
                            yankee = {};
                            kilo = golf;
                            backup = new Array(1);
                            backup[0] = kilo;
                            yankee['categories'] = backup;
                            yankee = romeo.bind(foxtrot)(yankee);
                            oscar['query'] = yankee;
                            oscar['oldFormErrors'] = offset;
                            offset = false;
                            oscar['rejectWithError'] = offset;
                            oscar = options.bind(verify)(oscar);
                            SaveGenerator(address=328);
 326:
                            return oscar;
 328:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(options) { _fun91540_ip = 447; continue _fun91540 }
 334:
                            options = oscar.body;
                            yankee = options.total;
                            options = oscar.body;
                            romeo = options.guilds;
                            offset = romeo.map;
                            foxtrot = _closure1_slot0;
                            options = _closure1_slot3;
                            verify = 9;
                            verify = options[verify];
                            verify = foxtrot.bind(zulu)(verify);
                            verify = verify.fromDiscoverableGuildServer;
                            romeo = offset.bind(romeo)(verify);
                            verify = _closure1_slot1;
                            options = options[report];
                            offset = verify.bind(zulu)(options);
                            verify = offset.dispatch;
                            options = {};
                            foxtrot = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS';
                            options['type'] = foxtrot;
                            foxtrot = golf;
                            options['categoryId'] = foxtrot;
                            options['guilds'] = romeo;
                            options['total'] = yankee;
                            options = verify.bind(offset)(options);
 445: // try_end0
                            _fun91540_ip = 534; continue _fun91540;
 447:
                            return oscar;
 450: // catch_target0
                            CatchBlockStart(arg_register=9);
                            options = _closure1_slot1;
                            oscar = _closure1_slot3;
                            report = oscar[report];
                            verify = options.bind(zulu)(report);
                            options = verify.dispatch;
                            report = {};
                            yankee = 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE';
                            report['type'] = yankee;
                            report['categoryId'] = golf;
                            report['error'] = offset;
                            report = options.bind(verify)(report);
                            report = _closure1_slot2;
                            tango = 14;
                            tango = oscar[tango];
                            oscar = report.bind(zulu)(tango);
                            report = oscar.trackGuildDiscoveryGetFeaturedGuildsFailed;
                            tango = {};
                            tango['categoryId'] = golf;
                            tango = report.bind(oscar)(tango);
 534:
                            return zulu;
 537:
                            return mike;
 540:
                            return entity;
                        }
                    };
                    mike = entity.next;
                    mike = mike.bind(entity)();
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            mike = mike.bind(zulu)();
            entity['fetchCategoryFeaturedGuilds'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot9;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot5;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();