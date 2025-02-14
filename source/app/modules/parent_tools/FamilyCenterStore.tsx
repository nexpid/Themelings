// app/modules/parent_tools/FamilyCenterStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun60290: for(var _fun60290_ip = 0; ; ) switch(_fun60290_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun60291: for(var _fun60291_ip = 0; ; ) switch(_fun60291_ip) {
 0:
                tango = argFoo;
                oscar = argBaz;
                mike = _closure1_slot6;
                zulu = undefined;
                entity = argBar;
                verify = mike.bind(zulu)(entity);
                mike = _closure1_slot5;
                entity = _closure1_slot26;
                entity = entity.bind(zulu)();
                if(entity) { _fun60291_ip = 51; continue _fun60291 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tango, oscar);
                _fun60291_ip = 92; continue _fun60291;
 51:
                golf = global;
                options = golf.Reflect;
                golf = options.construct;
                if(oscar) { _fun60291_ip = 71; continue _fun60291 }
 67:
                oscar = new Array(0);
 71:
                report = _closure1_slot6;
                report = report.bind(zulu)(tango);
                report = report.constructor;
                entity = golf.bind(options)(verify, oscar, report);
 92:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        var _closure1_slot25 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun60292: for(var _fun60292_ip = 0; ; ) switch(_fun60292_ip) {
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
 70: // try_end0
                _fun60292_ip = 74; continue _fun60292;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                mike = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot26 = mike;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot26 = entity;
        foxtrot = function() { // Original name: freshTeenActivityWithMap
            entity = {};
            zulu = _closure1_slot12;
            tango = zulu.USER_ADD;
            zulu = {};
            entity[tango] = zulu;
            zulu = _closure1_slot12;
            tango = zulu.GUILD_ADD;
            zulu = {};
            entity[tango] = zulu;
            zulu = _closure1_slot12;
            tango = zulu.USER_INTERACTION;
            zulu = {};
            entity[tango] = zulu;
            zulu = _closure1_slot12;
            tango = zulu.GUILD_INTERACTION;
            zulu = {};
            entity[tango] = zulu;
            mike = _closure1_slot12;
            zulu = mike.USER_CALLED;
            mike = {};
            entity[zulu] = mike;
            return entity;
        };
        var _closure1_slot27 = foxtrot;
        romeo = function() { // Original name: freshTeenActivityTotals
            entity = {};
            zulu = _closure1_slot12;
            tango = zulu.USER_ADD;
            zulu = 0;
            entity[tango] = zulu;
            tango = _closure1_slot12;
            tango = tango.GUILD_ADD;
            entity[tango] = zulu;
            tango = _closure1_slot12;
            tango = tango.USER_INTERACTION;
            entity[tango] = zulu;
            tango = _closure1_slot12;
            tango = tango.GUILD_INTERACTION;
            entity[tango] = zulu;
            mike = _closure1_slot12;
            mike = mike.USER_CALLED;
            entity[mike] = zulu;
            return entity;
        };
        var _closure1_slot28 = romeo;
        entity = function() { // Original name: processLinkedUsers
            _fun60297: for(var _fun60297_ip = 0; ; ) switch(_fun60297_ip) {
 0:
                report = arguments[0];
                entity = undefined;
                if(!(report === entity)) { _fun60297_ip = 13; continue _fun60297 }
 9:
                report = new Array(0);
 13:
                mike = report.length;
                entity = 0;
                if(!(!(mike > entity))) { _fun60297_ip = 28; continue _fun60297 }
 24:
                entity = {};
                _fun60297_ip = 49; continue _fun60297;
 28:
                tango = report.reduce;
                zulu = function(argFoo, argBar) {
                    zulu = argBar;
                    entity = {};
                    tango = argFoo;
                    report = entity;
                    mike = copyDataProperties(report, tango);
                    mike = zulu.user_id;
                    entity[mike] = zulu;
                    return entity;
                };
                mike = {};
                entity = tango.bind(report)(zulu, mike);
 49:
                _closure1_slot15 = entity;
                return entity;
            }
        };
        var _closure1_slot29 = entity;
        entity = function(argFoo) { // Original name: processTeenActivityTotals
            _fun60299: for(var _fun60299_ip = 0; ; ) switch(_fun60299_ip) {
 0:
                zulu = argFoo;
                entity = undefined;
                if(!(entity !== zulu)) { _fun60299_ip = 16; continue _fun60299 }
 9:
                _closure1_slot17 = zulu;
 16:
                return entity;
            }
        };
        var _closure1_slot30 = entity;
        entity = function(argFoo, argBar) { // Original name: processTeenActions
            _fun60300: for(var _fun60300_ip = 0; ; ) switch(_fun60300_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                if(zulu) { _fun60300_ip = 26; continue _fun60300 }
 14:
                tango = _closure1_slot27;
                zulu = undefined;
                tango = tango.bind(zulu)();
                _fun60300_ip = 30; continue _fun60300;
 26:
                tango = _closure1_slot16;
 30:
                var _closure2_slot0 = tango;
                zulu = report.reduce;
                entity = function(argFoo, argBar) {
                    _fun60301: for(var _fun60301_ip = 0; ; ) switch(_fun60301_ip) {
 0:
                        entity = argFoo;
                        tango = argBar;
                        mike = tango.display_type;
                        zulu = _closure2_slot0;
                        zulu = zulu[mike];
                        oscar = undefined;
                        zulu = oscar !== zulu;
                        if(!zulu) { _fun60301_ip = 54; continue _fun60301 }
 32:
                        report = _closure2_slot0;
                        golf = report[mike];
                        report = tango.event_id;
                        report = golf[report];
                        zulu = oscar === report;
 54:
                        if(!zulu) { _fun60301_ip = 71; continue _fun60301 }
 57:
                        zulu = entity[mike];
                        mike = tango.event_id;
                        zulu[mike] = tango;
 71:
                        return entity;
                    }
                };
                entity = zulu.bind(report)(entity, tango);
                _closure1_slot16 = entity;
                return entity;
            }
        };
        var _closure1_slot31 = entity;
        entity = function(argFoo) { // Original name: processGuilds
            report = argFoo;
            tango = report.reduce;
            zulu = _closure1_slot24;
            entity = function(argFoo, argBar) {
                report = argBar;
                entity = {};
                golf = argFoo;
                options = entity;
                mike = copyDataProperties(options, golf);
                zulu = report.id;
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 10;
                tango = tango[mike];
                mike = undefined;
                mike = oscar.bind(mike)(tango);
                mike = mike.FamilyCenterGuild;
                tango = mike.prototype;
                tango = Object.create(tango, {constructor: {value: mike}});
                verify = tango;
                options = report;
                mike = new verify[mike](options, golf);
                mike = mike instanceof Object ? mike : tango;
                entity[zulu] = mike;
                return entity;
            };
            entity = tango.bind(report)(entity, zulu);
            _closure1_slot24 = entity;
            entity = undefined;
            return entity;
        };
        var _closure1_slot32 = entity;
        entity = function() { // Original name: handleFetchStart
            entity = true;
            _closure1_slot21 = entity;
            entity = undefined;
            return entity;
        };
        var _closure1_slot33 = entity;
        entity = function(argFoo) { // Original name: handleInitialLoad
            entity = argFoo;
            tango = entity.linkedUsers;
            entity = entity.familyCenterTeenActivity;
            golf = entity.actions;
            report = entity.guilds;
            oscar = entity.totals;
            mike = entity.teenId;
            entity = entity.rangeStartId;
            _closure1_slot13 = mike;
            _closure1_slot14 = entity;
            mike = _closure1_slot31;
            entity = undefined;
            mike = mike.bind(entity)(golf);
            mike = _closure1_slot30;
            mike = mike.bind(entity)(oscar);
            mike = _closure1_slot32;
            mike = mike.bind(entity)(report);
            mike = _closure1_slot29;
            mike = mike.bind(entity)(tango);
            mike = false;
            _closure1_slot21 = mike;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 11;
            mike = report[mike];
            report = tango.bind(entity)(mike);
            tango = report.fromTimestamp;
            mike = global;
            oscar = mike.Date;
            mike = oscar.now;
            mike = mike.bind(oscar)();
            mike = tango.bind(report)(mike);
            _closure1_slot22 = mike;
            mike = true;
            _closure1_slot20 = mike;
            return entity;
        };
        var _closure1_slot34 = entity;
        entity = function(argFoo) { // Original name: handleLinkedUserFetch
            entity = argFoo;
            zulu = entity.linkedUsers;
            mike = _closure1_slot29;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        var _closure1_slot35 = entity;
        entity = function(argFoo) { // Original name: handleRequestLinkSuccess
            entity = argFoo;
            zulu = entity.linkedUsers;
            mike = _closure1_slot29;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        var _closure1_slot36 = entity;
        entity = function(argFoo) { // Original name: handleTeenActivityFetch
            _fun60308: for(var _fun60308_ip = 0; ; ) switch(_fun60308_ip) {
 0:
                entity = argFoo;
                mike = entity.familyCenterTeenActivity;
                entity = undefined;
                if(!(entity !== mike)) { _fun60308_ip = 144; continue _fun60308 }
 18:
                oscar = mike.actions;
                report = mike.totals;
                tango = mike.guilds;
                golf = mike.teenId;
                mike = mike.rangeStartId;
                _closure1_slot13 = golf;
                _closure1_slot14 = mike;
                mike = _closure1_slot31;
                mike = mike.bind(entity)(oscar);
                mike = _closure1_slot30;
                mike = mike.bind(entity)(report);
                mike = _closure1_slot32;
                mike = mike.bind(entity)(tango);
                mike = false;
                _closure1_slot21 = mike;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 11;
                mike = report[mike];
                report = tango.bind(entity)(mike);
                tango = report.fromTimestamp;
                mike = global;
                oscar = mike.Date;
                mike = oscar.now;
                mike = mike.bind(oscar)();
                mike = tango.bind(report)(mike);
                _closure1_slot22 = mike;
 144:
                return entity;
            }
        };
        var _closure1_slot37 = entity;
        entity = function(argFoo) { // Original name: handleTeenActivityMoreFetch
            entity = argFoo;
            entity = entity.familyCenterTeenActivity;
            oscar = entity.actions;
            zulu = entity.guilds;
            report = _closure1_slot31;
            entity = undefined;
            tango = true;
            tango = report.bind(entity)(oscar, tango);
            mike = _closure1_slot32;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        var _closure1_slot38 = entity;
        entity = function(argFoo) { // Original name: handleUserLinkStatusUpdate
            entity = argFoo;
            zulu = entity.linkedUsers;
            mike = _closure1_slot29;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        var _closure1_slot39 = entity;
        entity = function(argFoo) { // Original name: handleUserLinkRemove
            entity = argFoo;
            zulu = entity.linkedUsers;
            mike = _closure1_slot29;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        var _closure1_slot40 = entity;
        entity = function(argFoo) { // Original name: handleLinkCodeFetch
            entity = argFoo;
            mike = entity.linkCode;
            _closure1_slot18 = mike;
            entity = undefined;
            return entity;
        };
        var _closure1_slot41 = entity;
        entity = function(argFoo) { // Original name: handleTabSelect
            entity = argFoo;
            mike = entity.tab;
            _closure1_slot19 = mike;
            entity = undefined;
            return entity;
        };
        var _closure1_slot42 = entity;
        entity = function(argFoo) { // Original name: handleCurrentUserUpdate
            _fun60314: for(var _fun60314_ip = 0; ; ) switch(_fun60314_ip) {
 0:
                entity = argFoo;
                zulu = entity.user;
                entity = undefined;
                var _closure2_slot0 = entity;
                mike = zulu.linked_users;
                if(!(entity !== mike)) { _fun60314_ip = 164; continue _fun60314 }
 29:
                oscar = _closure1_slot10;
                report = oscar.getUsers;
                report = report.bind(oscar)();
                _closure2_slot0 = report;
                oscar = zulu.linked_users;
                report = oscar.some;
                tango = function(argFoo) {
                    entity = argFoo;
                    mike = entity.user_id;
                    entity = _closure2_slot0;
                    mike = entity[mike];
                    entity = undefined;
                    entity = entity === mike;
                    return entity;
                };
                tango = report.bind(oscar)(tango);
                if(!tango) { _fun60314_ip = 117; continue _fun60314 }
 75:
                tango = zulu.linked_users;
                report = tango.length;
                tango = global;
                golf = tango.Object;
                oscar = golf.keys;
                tango = _closure1_slot15;
                tango = oscar.bind(golf)(tango);
                tango = tango.length;
                if(!(!(report > tango))) { _fun60314_ip = 134; continue _fun60314 }
 117:
                tango = _closure1_slot29;
                zulu = zulu.linked_users;
                zulu = tango.bind(entity)(zulu);
                _fun60314_ip = 164; continue _fun60314;
 134:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 12;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchLinkedUsers;
                mike = mike.bind(zulu)();
 164:
                return entity;
            }
        };
        var _closure1_slot43 = entity;
        entity = function(argFoo) { // Original name: handleSetLocationMetadata
            _fun60316: for(var _fun60316_ip = 0; ; ) switch(_fun60316_ip) {
 0:
                entity = argFoo;
                report = entity.countryCode;
                mike = null;
                if(!(mike != report)) { _fun60316_ip = 45; continue _fun60316 }
 15:
                tango = _closure1_slot9;
                zulu = undefined;
                zulu = tango.bind(zulu)(report);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun60316_ip = 41; continue _fun60316 }
 38:
                mike = zulu;
 41:
                _closure1_slot23 = mike;
 45:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot44 = entity;
        entity = function() { // Original name: reset
            mike = null;
            _closure1_slot13 = mike;
            _closure1_slot14 = mike;
            entity = {};
            _closure1_slot15 = entity;
            tango = _closure1_slot27;
            entity = undefined;
            tango = tango.bind(entity)();
            _closure1_slot16 = tango;
            tango = _closure1_slot28;
            tango = tango.bind(entity)();
            _closure1_slot17 = tango;
            tango = {};
            _closure1_slot24 = tango;
            tango = false;
            _closure1_slot21 = tango;
            _closure1_slot22 = mike;
            return entity;
        };
        var _closure1_slot45 = entity;
        yankee = global;
        options = yankee.Object;
        golf = options.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(options)(zulu, entity, tango);
        entity = 0;
        tango = oscar[entity];
        entity = undefined;
        tango = verify.bind(entity)(tango);
        var _closure1_slot3 = tango;
        tango = 1;
        tango = oscar[tango];
        tango = verify.bind(entity)(tango);
        var _closure1_slot4 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = verify.bind(entity)(tango);
        var _closure1_slot5 = tango;
        tango = 3;
        golf = oscar[tango];
        golf = verify.bind(entity)(golf);
        var _closure1_slot6 = golf;
        golf = 4;
        golf = oscar[golf];
        golf = verify.bind(entity)(golf);
        var _closure1_slot7 = golf;
        golf = 5;
        golf = oscar[golf];
        golf = verify.bind(entity)(golf);
        var _closure1_slot8 = golf;
        golf = 6;
        golf = oscar[golf];
        golf = report.bind(entity)(golf);
        golf = golf.getCountryCodeByAlpha2;
        var _closure1_slot9 = golf;
        golf = 7;
        golf = oscar[golf];
        golf = verify.bind(entity)(golf);
        options = 8;
        options = oscar[options];
        options = verify.bind(entity)(options);
        var _closure1_slot10 = options;
        options = 9;
        options = oscar[options];
        options = report.bind(entity)(options);
        verify = options.FAMILY_CENTER_REFETCH_COOLDOWN;
        var _closure1_slot11 = verify;
        verify = options.FAMILY_CENTER_SUB_ROUTES;
        offset = options.FamilyCenterSubPages;
        options = options.TeenActionDisplayType;
        var _closure1_slot12 = options;
        options = null;
        var _closure1_slot13 = options;
        var _closure1_slot14 = options;
        backup = {};
        var _closure1_slot15 = backup;
        foxtrot = foxtrot.bind(entity)();
        var _closure1_slot16 = foxtrot;
        romeo = romeo.bind(entity)();
        var _closure1_slot17 = romeo;
        var _closure1_slot18 = options;
        romeo = yankee.window;
        backup = options == romeo;
        foxtrot = undefined;
        if(backup) { _fun60290_ip = 509; continue _fun60290 }
 489:
        romeo = romeo.location;
        backup = options == romeo;
        foxtrot = undefined;
        if(backup) { _fun60290_ip = 509; continue _fun60290 }
 503:
        foxtrot = romeo.pathname;
 509:
        romeo = verify.FAMILY_CENTER_MY_FAMILY;
        if(!(foxtrot !== romeo)) { _fun60290_ip = 580; continue _fun60290 }
 519:
        romeo = yankee.window;
        foxtrot = options == romeo;
        yankee = undefined;
        if(foxtrot) { _fun60290_ip = 554; continue _fun60290 }
 534:
        romeo = romeo.location;
        foxtrot = options == romeo;
        yankee = undefined;
        if(foxtrot) { _fun60290_ip = 554; continue _fun60290 }
 548:
        yankee = romeo.pathname;
 554:
        verify = verify.FAMILY_CENTER_SETTINGS;
        if(!(yankee !== verify)) { _fun60290_ip = 572; continue _fun60290 }
 564:
        verify = offset.ACTIVITY;
        _fun60290_ip = 586; continue _fun60290;
 572:
        verify = offset.SETTINGS;
        _fun60290_ip = 586; continue _fun60290;
 580:
        verify = offset.REQUESTS;
 586:
        var _closure1_slot19 = verify;
        verify = false;
        var _closure1_slot20 = verify;
        var _closure1_slot21 = verify;
        var _closure1_slot22 = options;
        var _closure1_slot23 = options;
        options = {};
        var _closure1_slot24 = options;
        mike = function(argFoo) {
            tango = function() { // Original name: FamilyCenterStore
                oscar = this;
                zulu = _closure1_slot3;
                report = _closure2_slot0;
                tango = undefined;
                zulu = zulu.bind(tango)(oscar, report);
                zulu = _closure1_slot25;
                golf = {};
                options = _closure1_slot43;
                golf['CURRENT_USER_UPDATE'] = options;
                options = function() { // Original name: CACHE_LOADED_LAZY
                    mike = _closure3_slot0;
                    entity = mike.loadCache;
                    entity = entity.bind(mike)();
                    return entity;
                };
                golf['CACHE_LOADED_LAZY'] = options;
                options = _closure1_slot34;
                golf['FAMILY_CENTER_INITIAL_LOAD'] = options;
                options = _closure1_slot33;
                golf['FAMILY_CENTER_FETCH_START'] = options;
                options = _closure1_slot35;
                golf['FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS'] = options;
                options = _closure1_slot37;
                golf['FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS'] = options;
                options = _closure1_slot38;
                golf['FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS'] = options;
                options = _closure1_slot36;
                golf['FAMILY_CENTER_REQUEST_LINK_SUCCESS'] = options;
                options = _closure1_slot39;
                golf['FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS'] = options;
                options = _closure1_slot40;
                golf['FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS'] = options;
                options = _closure1_slot41;
                golf['FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS'] = options;
                options = _closure1_slot42;
                golf['FAMILY_CENTER_HANDLE_TAB_SELECT'] = options;
                options = _closure1_slot44;
                golf['SET_LOCATION_METADATA'] = options;
                entity = _closure1_slot45;
                golf['LOGOUT'] = entity;
                entity = new Array(1);
                entity[0] = golf;
                entity = zulu.bind(tango)(oscar, report, entity);
                var _closure3_slot0 = entity;
                return entity;
            };
            var _closure2_slot0 = tango;
            report = _closure1_slot7;
            zulu = undefined;
            mike = argFoo;
            mike = report.bind(zulu)(tango, mike);
            mike = _closure1_slot4;
            report = {};
            entity = 'initialize';
            report['key'] = entity;
            entity = function() { // Original name: value
                zulu = this;
                mike = zulu.waitFor;
                entity = _closure1_slot10;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(17);
            entity[0] = report;
            report = {};
            golf = 'loadCache';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun60322: for(var _fun60322_ip = 0; ; ) switch(_fun60322_ip) {
 0:
                    zulu = this;
                    mike = zulu.readSnapshot;
                    entity = _closure2_slot0;
                    entity = entity.LATEST_SNAPSHOT_VERSION;
                    entity = mike.bind(zulu)(entity);
                    mike = null;
                    if(!(mike != entity)) { _fun60322_ip = 101; continue _fun60322 }
 33:
                    report = _closure1_slot29;
                    tango = entity.linkedUsers;
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    report = _closure1_slot32;
                    tango = entity.guilds;
                    tango = report.bind(zulu)(tango);
                    tango = _closure1_slot31;
                    mike = entity.teenActivity;
                    mike = tango.bind(zulu)(mike);
                    mike = entity.teenActivityTotals;
                    entity = function(argFoo) { // Original name: teenActivityTotalsFromSnapshot
                        oscar = argFoo;
                        report = oscar.reduce;
                        mike = _closure1_slot28;
                        entity = undefined;
                        tango = mike.bind(entity)();
                        mike = function(argFoo, argBar) {
                            _fun60324: for(var _fun60324_ip = 0; ; ) switch(_fun60324_ip) {
 0:
                                zulu = argFoo;
                                tango = argBar;
                                mike = tango.split;
                                entity = ':';
                                report = mike.bind(tango)(entity);
                                tango = _closure1_slot8;
                                golf = undefined;
                                mike = 2;
                                report = tango.bind(golf)(report, mike);
                                mike = 0;
                                tango = report[mike];
                                mike = 1;
                                oscar = report[mike];
                                mike = _closure1_slot0;
                                report = _closure1_slot2;
                                entity = 13;
                                entity = report[entity];
                                mike = mike.bind(golf)(entity);
                                entity = mike.displayTypeFromString;
                                tango = entity.bind(mike)(tango);
                                entity = zulu;
                                if(!(golf !== tango)) { _fun60324_ip = 126; continue _fun60324 }
 89:
                                mike = {};
                                verify = mike;
                                options = zulu;
                                zulu = copyDataProperties(verify, options);
                                zulu = global;
                                report = zulu.parseInt;
                                zulu = 10;
                                zulu = report.bind(golf)(oscar, zulu);
                                mike[tango] = zulu;
                                entity = mike;
 126:
                                return entity;
                            }
                        };
                        mike = report.bind(oscar)(mike, tango);
                        _closure1_slot17 = mike;
                        return entity;
                    };
                    entity = entity.bind(zulu)(mike);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golf;
            entity[1] = report;
            report = {};
            golf = 'takeSnapshot';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = {};
                mike = _closure2_slot0;
                mike = mike.LATEST_SNAPSHOT_VERSION;
                entity['version'] = mike;
                mike = {};
                tango = global;
                options = tango.Object;
                golf = options.values;
                report = _closure1_slot15;
                report = golf.bind(options)(report);
                mike['linkedUsers'] = report;
                options = tango.Object;
                golf = options.entries;
                report = _closure1_slot17;
                options = golf.bind(options)(report);
                golf = options.map;
                report = function(argFoo) {
                    _fun60326: for(var _fun60326_ip = 0; ; ) switch(_fun60326_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu[Symbol.iterator];
                        zulu = entity().next;
                        tango = zulu().value;
                        mike = entity;
                        golf = undefined;
                        mike = mike === golf;
                        report = undefined;
                        if(mike) { _fun60326_ip = 27; continue _fun60326 }
 24:
                        report = tango;
 27:
                        tango = undefined;
                        if(mike) { _fun60326_ip = 57; continue _fun60326 }
 32:
                        oscar = zulu().value;
                        zulu = entity;
                        zulu = zulu === golf;
                        tango = undefined;
                        mike = zulu;
                        if(zulu) { _fun60326_ip = 57; continue _fun60326 }
 51:
                        tango = oscar;
                        mike = zulu;
 57:
                        if(mike) { _fun60326_ip = 63; continue _fun60326 }
 60:
                        entity.return();
 63:
                        entity = global;
                        entity = entity.HermesInternal;
                        zulu = entity.concat;
                        mike = '';
                        entity = ':';
                        entity = zulu.bind(mike)(report, entity, tango);
                        return entity;
                    }
                };
                report = golf.bind(options)(report);
                mike['teenActivityTotals'] = report;
                report = new Array(0);
                var _closure3_slot0 = report;
                verify = tango.Object;
                options = verify.entries;
                golf = _closure1_slot16;
                options = options.bind(verify)(golf);
                golf = options.forEach;
                oscar = function(argFoo) {
                    _fun60327: for(var _fun60327_ip = 0; ; ) switch(_fun60327_ip) {
 0:
                        tango = argFoo;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        entity = tango().value;
                        zulu = mike;
                        entity = undefined;
                        zulu = zulu === entity;
                        oscar = undefined;
                        if(zulu) { _fun60327_ip = 49; continue _fun60327 }
 24:
                        report = tango().value;
                        tango = mike;
                        tango = tango === entity;
                        oscar = undefined;
                        zulu = tango;
                        if(tango) { _fun60327_ip = 49; continue _fun60327 }
 43:
                        oscar = report;
                        zulu = tango;
 49:
                        if(zulu) { _fun60327_ip = 55; continue _fun60327 }
 52:
                        mike.return();
 55:
                        tango = _closure3_slot0;
                        zulu = tango.push;
                        mike = global;
                        report = mike.Object;
                        mike = report.values;
                        verify = mike.bind(report)(oscar);
                        mike = new Array(0);
                        options = 0;
                        offset = mike;
                        report = arraySpread(offset, verify, options);
                        offset = zulu;
                        verify = mike;
                        options = tango;
                        mike = apply(offset, verify, options);
                        return entity;
                    }
                };
                oscar = golf.bind(options)(oscar);
                mike['teenActivity'] = report;
                report = tango.Object;
                tango = report.values;
                zulu = _closure1_slot24;
                zulu = tango.bind(report)(zulu);
                mike['guilds'] = zulu;
                entity['data'] = mike;
                return entity;
            };
            report['value'] = golf;
            entity[2] = report;
            report = {};
            golf = 'getSelectedTeenId';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot13;
                return entity;
            };
            report['value'] = golf;
            entity[3] = report;
            report = {};
            golf = 'getLinkedUsers';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot15;
                return entity;
            };
            report['value'] = golf;
            entity[4] = report;
            report = {};
            golf = 'getLinkTimestamp';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                _fun60330: for(var _fun60330_ip = 0; ; ) switch(_fun60330_ip) {
 0:
                    mike = _closure1_slot15;
                    entity = argFoo;
                    zulu = mike[entity];
                    tango = null;
                    mike = tango == zulu;
                    entity = null;
                    if(mike) { _fun60330_ip = 44; continue _fun60330 }
 25:
                    mike = zulu.updated_at;
                    if(!(tango == mike)) { _fun60330_ip = 41; continue _fun60330 }
 35:
                    mike = zulu.created_at;
 41:
                    entity = mike;
 44:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[5] = report;
            report = {};
            golf = 'getRangeStartTimestamp';
            report['key'] = golf;
            golf = function() { // Original name: value
                _fun60331: for(var _fun60331_ip = 0; ; ) switch(_fun60331_ip) {
 0:
                    zulu = _closure1_slot14;
                    entity = null;
                    zulu = entity == zulu;
                    if(zulu) { _fun60331_ip = 53; continue _fun60331 }
 16:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 11;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.extractTimestamp;
                    mike = _closure1_slot14;
                    entity = zulu.bind(tango)(mike);
 53:
                    return entity;
                }
            };
            report['value'] = golf;
            entity[6] = report;
            report = {};
            golf = 'getActionsForDisplayType';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                entity = global;
                zulu = entity.Object;
                mike = zulu.values;
                tango = _closure1_slot16;
                entity = argFoo;
                entity = tango[entity];
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report['value'] = golf;
            entity[7] = report;
            report = {};
            golf = 'getTotalForDisplayType';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot17;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[8] = report;
            report = {};
            golf = 'getLinkCode';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot18;
                return entity;
            };
            report['value'] = golf;
            entity[9] = report;
            report = {};
            golf = 'getGuild';
            report['key'] = golf;
            golf = function(argFoo) { // Original name: value
                mike = _closure1_slot24;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            report['value'] = golf;
            entity[10] = report;
            report = {};
            golf = 'getSelectedTab';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot19;
                return entity;
            };
            report['value'] = golf;
            entity[11] = report;
            report = {};
            golf = 'getStartId';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot14;
                return entity;
            };
            report['value'] = golf;
            entity[12] = report;
            report = {};
            golf = 'getIsInitialized';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot20;
                return entity;
            };
            report['value'] = golf;
            entity[13] = report;
            report = {};
            golf = 'getUserCountry';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot23;
                return entity;
            };
            report['value'] = golf;
            entity[14] = report;
            report = {};
            golf = 'isLoading';
            report['key'] = golf;
            golf = function() { // Original name: value
                entity = _closure1_slot21;
                return entity;
            };
            report['value'] = golf;
            entity[15] = report;
            report = {};
            golf = 'canRefetch';
            report['key'] = golf;
            oscar = function() { // Original name: value
                _fun60341: for(var _fun60341_ip = 0; ; ) switch(_fun60341_ip) {
 0:
                    zulu = _closure1_slot22;
                    entity = null;
                    entity = entity === zulu;
                    if(entity) { _fun60341_ip = 61; continue _fun60341 }
 16:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 11;
                    tango = tango[zulu];
                    zulu = undefined;
                    report = report.bind(zulu)(tango);
                    tango = report.age;
                    zulu = _closure1_slot22;
                    zulu = tango.bind(report)(zulu);
                    mike = _closure1_slot11;
                    entity = zulu > mike;
 61:
                    return entity;
                }
            };
            report['value'] = oscar;
            entity[16] = report;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        };
        mike = mike.bind(entity)(golf);
        golf = 'FamilyCenterStore';
        mike['displayName'] = golf;
        mike['LATEST_SNAPSHOT_VERSION'] = tango;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        result = tango;
        mike = new result[mike](output);
        mike = mike instanceof Object ? mike : tango;
        tango = 14;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/parent_tools/FamilyCenterStore.tsx';
        tango = report.bind(oscar)(tango);
        zulu['default'] = mike;
        return entity;
    }
})();