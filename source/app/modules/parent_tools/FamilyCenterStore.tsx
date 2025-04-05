// app/modules/parent_tools/FamilyCenterStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        verify = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = verify;
        var _closure1_slot2 = oscard;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
                michal = global;
                zuuluu = michal.Boolean;
                zuuluu = zuuluu.prototype;
                tangon = zuuluu.valueOf;
                zuuluu = tangon.call;
                option = michal.Reflect;
                golfie = option.construct;
                oscard = michal.Boolean;
                report = new Array(0);
                michal = function() {
                    entity = undefined;
                    return entity;
                };
                michal = golfie.bind(option)(oscard, report, michal);
                michal = zuuluu.bind(tangon)(michal);
                michal = !michal;
                var _closure2_slot0 = michal;
 70: // try_end0
                _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot25 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot25 = entity;
        foxtra = function() { // Original name: freshTeenActivityWithMap
            entity = {};
            zuuluu = _closure1_slot12;
            tangon = zuuluu.USER_ADD;
            zuuluu = {};
            entity[tangon] = zuuluu;
            zuuluu = _closure1_slot12;
            tangon = zuuluu.GUILD_ADD;
            zuuluu = {};
            entity[tangon] = zuuluu;
            zuuluu = _closure1_slot12;
            tangon = zuuluu.USER_INTERACTION;
            zuuluu = {};
            entity[tangon] = zuuluu;
            zuuluu = _closure1_slot12;
            tangon = zuuluu.GUILD_INTERACTION;
            zuuluu = {};
            entity[tangon] = zuuluu;
            michal = _closure1_slot12;
            zuuluu = michal.USER_CALLED;
            michal = {};
            entity[zuuluu] = michal;
            return entity;
        };
        var _closure1_slot26 = foxtra;
        romeon = function() { // Original name: freshTeenActivityTotals
            entity = {};
            zuuluu = _closure1_slot12;
            tangon = zuuluu.USER_ADD;
            zuuluu = 0;
            entity[tangon] = zuuluu;
            tangon = _closure1_slot12;
            tangon = tangon.GUILD_ADD;
            entity[tangon] = zuuluu;
            tangon = _closure1_slot12;
            tangon = tangon.USER_INTERACTION;
            entity[tangon] = zuuluu;
            tangon = _closure1_slot12;
            tangon = tangon.GUILD_INTERACTION;
            entity[tangon] = zuuluu;
            michal = _closure1_slot12;
            michal = michal.USER_CALLED;
            entity[michal] = zuuluu;
            return entity;
        };
        var _closure1_slot27 = romeon;
        entity = function() { // Original name: processLinkedUsers
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = arguments[0];
                entity = undefined;
                if(!(report === entity)) { _fun00006_ip = 13; continue _fun00005 }
 9:
                report = new Array(0);
 13:
                michal = report.length;
                entity = 0;
                if(!(!(michal > entity))) { _fun00006_ip = 28; continue _fun00005 }
 24:
                entity = {};
                _fun00006_ip = 49; continue _fun00005;
 28:
                tangon = report.reduce;
                zuuluu = function(argFoo, argBar) {
                    zuuluu = argBar;
                    entity = {};
                    tangon = argFoo;
                    report = entity;
                    michal = copyDataProperties(report, tangon);
                    michal = zuuluu.user_id;
                    entity[michal] = zuuluu;
                    return entity;
                };
                michal = {};
                entity = tangon.bind(report)(zuuluu, michal);
 49:
                _closure1_slot15 = entity;
                return entity;
            }
        };
        var _closure1_slot28 = entity;
        entity = function(argFoo) { // Original name: processTeenActivityTotals
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = undefined;
                if(!(entity !== zuuluu)) { _fun00008_ip = 16; continue _fun00007 }
 9:
                _closure1_slot17 = zuuluu;
 16:
                return entity;
            }
        };
        var _closure1_slot29 = entity;
        entity = function(argFoo, argBar) { // Original name: processTeenActions
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                if(zuuluu) { _fun00010_ip = 26; continue _fun00009 }
 14:
                tangon = _closure1_slot26;
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)();
                _fun00010_ip = 30; continue _fun00009;
 26:
                tangon = _closure1_slot16;
 30:
                var _closure2_slot0 = tangon;
                zuuluu = report.reduce;
                entity = function(argFoo, argBar) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        tangon = argBar;
                        michal = tangon.display_type;
                        zuuluu = _closure2_slot0;
                        zuuluu = zuuluu[michal];
                        oscard = undefined;
                        zuuluu = oscard !== zuuluu;
                        if(!zuuluu) { _fun00012_ip = 54; continue _fun00011 }
 32:
                        report = _closure2_slot0;
                        golfie = report[michal];
                        report = tangon.event_id;
                        report = golfie[report];
                        zuuluu = oscard === report;
 54:
                        if(!zuuluu) { _fun00012_ip = 71; continue _fun00011 }
 57:
                        zuuluu = entity[michal];
                        michal = tangon.event_id;
                        zuuluu[michal] = tangon;
 71:
                        return entity;
                    }
                };
                entity = zuuluu.bind(report)(entity, tangon);
                _closure1_slot16 = entity;
                return entity;
            }
        };
        var _closure1_slot30 = entity;
        entity = function(argFoo) { // Original name: processGuilds
            report = argFoo;
            tangon = report.reduce;
            zuuluu = _closure1_slot24;
            entity = function(argFoo, argBar) {
                report = argBar;
                entity = {};
                golfie = argFoo;
                option = entity;
                michal = copyDataProperties(option, golfie);
                zuuluu = report.id;
                oscard = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 10;
                tangon = tangon[michal];
                michal = undefined;
                michal = oscard.bind(michal)(tangon);
                michal = michal.FamilyCenterGuild;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                verify = tangon;
                option = report;
                michal = new verify[michal](option, golfie);
                michal = michal instanceof Object ? michal : tangon;
                entity[zuuluu] = michal;
                return entity;
            };
            entity = tangon.bind(report)(entity, zuuluu);
            _closure1_slot24 = entity;
            entity = undefined;
            return entity;
        };
        var _closure1_slot31 = entity;
        entity = function() { // Original name: handleFetchStart
            entity = true;
            _closure1_slot21 = entity;
            entity = undefined;
            return entity;
        };
        var _closure1_slot32 = entity;
        entity = function(argFoo) { // Original name: handleInitialLoad
            entity = argFoo;
            tangon = entity.linkedUsers;
            entity = entity.familyCenterTeenActivity;
            golfie = entity.actions;
            report = entity.guilds;
            oscard = entity.totals;
            michal = entity.teenId;
            entity = entity.rangeStartId;
            _closure1_slot13 = michal;
            _closure1_slot14 = entity;
            michal = _closure1_slot30;
            entity = undefined;
            michal = michal.bind(entity)(golfie);
            michal = _closure1_slot29;
            michal = michal.bind(entity)(oscard);
            michal = _closure1_slot31;
            michal = michal.bind(entity)(report);
            michal = _closure1_slot28;
            michal = michal.bind(entity)(tangon);
            michal = false;
            _closure1_slot21 = michal;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 11;
            michal = report[michal];
            report = tangon.bind(entity)(michal);
            tangon = report.fromTimestamp;
            michal = global;
            oscard = michal.Date;
            michal = oscard.now;
            michal = michal.bind(oscard)();
            michal = tangon.bind(report)(michal);
            _closure1_slot22 = michal;
            michal = true;
            _closure1_slot20 = michal;
            return entity;
        };
        var _closure1_slot33 = entity;
        entity = function(argFoo) { // Original name: handleLinkedUserFetch
            entity = argFoo;
            zuuluu = entity.linkedUsers;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        var _closure1_slot34 = entity;
        entity = function(argFoo) { // Original name: handleRequestLinkSuccess
            entity = argFoo;
            zuuluu = entity.linkedUsers;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        var _closure1_slot35 = entity;
        entity = function(argFoo) { // Original name: handleTeenActivityFetch
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                michal = entity.familyCenterTeenActivity;
                entity = undefined;
                if(!(entity !== michal)) { _fun00014_ip = 144; continue _fun00013 }
 18:
                oscard = michal.actions;
                report = michal.totals;
                tangon = michal.guilds;
                golfie = michal.teenId;
                michal = michal.rangeStartId;
                _closure1_slot13 = golfie;
                _closure1_slot14 = michal;
                michal = _closure1_slot30;
                michal = michal.bind(entity)(oscard);
                michal = _closure1_slot29;
                michal = michal.bind(entity)(report);
                michal = _closure1_slot31;
                michal = michal.bind(entity)(tangon);
                michal = false;
                _closure1_slot21 = michal;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 11;
                michal = report[michal];
                report = tangon.bind(entity)(michal);
                tangon = report.fromTimestamp;
                michal = global;
                oscard = michal.Date;
                michal = oscard.now;
                michal = michal.bind(oscard)();
                michal = tangon.bind(report)(michal);
                _closure1_slot22 = michal;
 144:
                return entity;
            }
        };
        var _closure1_slot36 = entity;
        entity = function(argFoo) { // Original name: handleTeenActivityMoreFetch
            entity = argFoo;
            entity = entity.familyCenterTeenActivity;
            oscard = entity.actions;
            zuuluu = entity.guilds;
            report = _closure1_slot30;
            entity = undefined;
            tangon = true;
            tangon = report.bind(entity)(oscard, tangon);
            michal = _closure1_slot31;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        var _closure1_slot37 = entity;
        entity = function(argFoo) { // Original name: handleUserLinkStatusUpdate
            entity = argFoo;
            zuuluu = entity.linkedUsers;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        var _closure1_slot38 = entity;
        entity = function(argFoo) { // Original name: handleUserLinkRemove
            entity = argFoo;
            zuuluu = entity.linkedUsers;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        var _closure1_slot39 = entity;
        entity = function(argFoo) { // Original name: handleLinkCodeFetch
            entity = argFoo;
            michal = entity.linkCode;
            _closure1_slot18 = michal;
            entity = undefined;
            return entity;
        };
        var _closure1_slot40 = entity;
        entity = function(argFoo) { // Original name: handleTabSelect
            entity = argFoo;
            michal = entity.tab;
            _closure1_slot19 = michal;
            entity = undefined;
            return entity;
        };
        var _closure1_slot41 = entity;
        entity = function(argFoo) { // Original name: handleCurrentUserUpdate
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.user;
                entity = undefined;
                var _closure2_slot0 = entity;
                michal = zuuluu.linked_users;
                if(!(entity !== michal)) { _fun00016_ip = 164; continue _fun00015 }
 29:
                oscard = _closure1_slot10;
                report = oscard.getUsers;
                report = report.bind(oscard)();
                _closure2_slot0 = report;
                oscard = zuuluu.linked_users;
                report = oscard.some;
                tangon = function(argFoo) {
                    entity = argFoo;
                    michal = entity.user_id;
                    entity = _closure2_slot0;
                    michal = entity[michal];
                    entity = undefined;
                    entity = entity === michal;
                    return entity;
                };
                tangon = report.bind(oscard)(tangon);
                if(!tangon) { _fun00016_ip = 117; continue _fun00015 }
 75:
                tangon = zuuluu.linked_users;
                report = tangon.length;
                tangon = global;
                golfie = tangon.Object;
                oscard = golfie.keys;
                tangon = _closure1_slot15;
                tangon = oscard.bind(golfie)(tangon);
                tangon = tangon.length;
                if(!(!(report > tangon))) { _fun00016_ip = 134; continue _fun00015 }
 117:
                tangon = _closure1_slot28;
                zuuluu = zuuluu.linked_users;
                zuuluu = tangon.bind(entity)(zuuluu);
                _fun00016_ip = 164; continue _fun00015;
 134:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 12;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.fetchLinkedUsers;
                michal = michal.bind(zuuluu)();
 164:
                return entity;
            }
        };
        var _closure1_slot42 = entity;
        entity = function(argFoo) { // Original name: handleSetLocationMetadata
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                report = entity.countryCode;
                michal = null;
                if(!(michal != report)) { _fun00018_ip = 45; continue _fun00017 }
 15:
                tangon = _closure1_slot9;
                zuuluu = undefined;
                zuuluu = tangon.bind(zuuluu)(report);
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00018_ip = 41; continue _fun00017 }
 38:
                michal = zuuluu;
 41:
                _closure1_slot23 = michal;
 45:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot43 = entity;
        entity = function() { // Original name: reset
            michal = null;
            _closure1_slot13 = michal;
            _closure1_slot14 = michal;
            entity = {};
            _closure1_slot15 = entity;
            tangon = _closure1_slot26;
            entity = undefined;
            tangon = tangon.bind(entity)();
            _closure1_slot16 = tangon;
            tangon = _closure1_slot27;
            tangon = tangon.bind(entity)();
            _closure1_slot17 = tangon;
            tangon = {};
            _closure1_slot24 = tangon;
            tangon = false;
            _closure1_slot21 = tangon;
            _closure1_slot22 = michal;
            return entity;
        };
        var _closure1_slot44 = entity;
        yankee = global;
        option = yankee.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = oscard[entity];
        entity = undefined;
        tangon = verify.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        tangon = 1;
        tangon = oscard[tangon];
        tangon = verify.bind(entity)(tangon);
        var _closure1_slot4 = tangon;
        tangon = 2;
        tangon = oscard[tangon];
        tangon = verify.bind(entity)(tangon);
        var _closure1_slot5 = tangon;
        tangon = 3;
        golfie = oscard[tangon];
        golfie = verify.bind(entity)(golfie);
        var _closure1_slot6 = golfie;
        golfie = 4;
        golfie = oscard[golfie];
        golfie = verify.bind(entity)(golfie);
        var _closure1_slot7 = golfie;
        golfie = 5;
        golfie = oscard[golfie];
        golfie = verify.bind(entity)(golfie);
        var _closure1_slot8 = golfie;
        golfie = 6;
        golfie = oscard[golfie];
        golfie = report.bind(entity)(golfie);
        golfie = golfie.getCountryCodeByAlpha2;
        var _closure1_slot9 = golfie;
        golfie = 7;
        golfie = oscard[golfie];
        golfie = verify.bind(entity)(golfie);
        option = 8;
        option = oscard[option];
        option = verify.bind(entity)(option);
        var _closure1_slot10 = option;
        option = 9;
        option = oscard[option];
        option = report.bind(entity)(option);
        verify = option.FAMILY_CENTER_REFETCH_COOLDOWN;
        var _closure1_slot11 = verify;
        verify = option.FAMILY_CENTER_SUB_ROUTES;
        offset = option.FamilyCenterSubPages;
        option = option.TeenActionDisplayType;
        var _closure1_slot12 = option;
        option = null;
        var _closure1_slot13 = option;
        var _closure1_slot14 = option;
        backup = {};
        var _closure1_slot15 = backup;
        foxtra = foxtra.bind(entity)();
        var _closure1_slot16 = foxtra;
        romeon = romeon.bind(entity)();
        var _closure1_slot17 = romeon;
        var _closure1_slot18 = option;
        romeon = yankee.window;
        backup = option == romeon;
        foxtra = undefined;
        if(backup) { _fun00002_ip = 500; continue _fun00001 }
 480:
        romeon = romeon.location;
        backup = option == romeon;
        foxtra = undefined;
        if(backup) { _fun00002_ip = 500; continue _fun00001 }
 494:
        foxtra = romeon.pathname;
 500:
        romeon = verify.FAMILY_CENTER_MY_FAMILY;
        if(!(foxtra !== romeon)) { _fun00002_ip = 571; continue _fun00001 }
 510:
        romeon = yankee.window;
        foxtra = option == romeon;
        yankee = undefined;
        if(foxtra) { _fun00002_ip = 545; continue _fun00001 }
 525:
        romeon = romeon.location;
        foxtra = option == romeon;
        yankee = undefined;
        if(foxtra) { _fun00002_ip = 545; continue _fun00001 }
 539:
        yankee = romeon.pathname;
 545:
        verify = verify.FAMILY_CENTER_SETTINGS;
        if(!(yankee !== verify)) { _fun00002_ip = 563; continue _fun00001 }
 555:
        verify = offset.ACTIVITY;
        _fun00002_ip = 577; continue _fun00001;
 563:
        verify = offset.SETTINGS;
        _fun00002_ip = 577; continue _fun00001;
 571:
        verify = offset.REQUESTS;
 577:
        var _closure1_slot19 = verify;
        verify = false;
        var _closure1_slot20 = verify;
        var _closure1_slot21 = verify;
        var _closure1_slot22 = option;
        var _closure1_slot23 = option;
        option = {};
        var _closure1_slot24 = option;
        michal = function(argFoo) {
            tangon = function() { // Original name: FamilyCenterStore
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = this;
                    entity = _closure1_slot3;
                    zuuluu = _closure2_slot0;
                    tangon = undefined;
                    entity = entity.bind(tangon)(report, zuuluu);
                    entity = {};
                    golfie = _closure1_slot42;
                    entity['CURRENT_USER_UPDATE'] = golfie;
                    golfie = function() { // Original name: CACHE_LOADED_LAZY
                        michal = _closure3_slot0;
                        entity = michal.loadCache;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    entity['CACHE_LOADED_LAZY'] = golfie;
                    golfie = _closure1_slot33;
                    entity['FAMILY_CENTER_INITIAL_LOAD'] = golfie;
                    golfie = _closure1_slot32;
                    entity['FAMILY_CENTER_FETCH_START'] = golfie;
                    golfie = _closure1_slot34;
                    entity['FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS'] = golfie;
                    golfie = _closure1_slot36;
                    entity['FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS'] = golfie;
                    golfie = _closure1_slot37;
                    entity['FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS'] = golfie;
                    golfie = _closure1_slot35;
                    entity['FAMILY_CENTER_REQUEST_LINK_SUCCESS'] = golfie;
                    golfie = _closure1_slot38;
                    entity['FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS'] = golfie;
                    golfie = _closure1_slot39;
                    entity['FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS'] = golfie;
                    golfie = _closure1_slot40;
                    entity['FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS'] = golfie;
                    golfie = _closure1_slot41;
                    entity['FAMILY_CENTER_HANDLE_TAB_SELECT'] = golfie;
                    golfie = _closure1_slot43;
                    entity['SET_LOCATION_METADATA'] = golfie;
                    golfie = _closure1_slot44;
                    entity['LOGOUT'] = golfie;
                    offset = new Array(1);
                    offset[0] = entity;
                    entity = _closure1_slot6;
                    verify = entity.bind(tangon)(zuuluu);
                    zuuluu = _closure1_slot5;
                    entity = _closure1_slot25;
                    entity = entity.bind(tangon)();
                    if(entity) { _fun00020_ip = 211; continue _fun00019 }
 198:
                    entity = verify.apply;
                    entity = entity.bind(verify)(report, offset);
                    _fun00020_ip = 245; continue _fun00019;
 211:
                    golfie = global;
                    option = golfie.Reflect;
                    golfie = option.construct;
                    oscard = _closure1_slot6;
                    oscard = oscard.bind(tangon)(report);
                    oscard = oscard.constructor;
                    entity = golfie.bind(option)(verify, offset, oscard);
 245:
                    entity = zuuluu.bind(tangon)(report, entity);
                    var _closure3_slot0 = entity;
                    return entity;
                }
            };
            var _closure2_slot0 = tangon;
            report = _closure1_slot7;
            zuuluu = undefined;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            michal = _closure1_slot4;
            report = {};
            entity = 'initialize';
            report['key'] = entity;
            entity = function() { // Original name: value
                zuuluu = this;
                michal = zuuluu.waitFor;
                entity = _closure1_slot10;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            report['value'] = entity;
            entity = new Array(17);
            entity[0] = report;
            report = {};
            golfie = 'loadCache';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = this;
                    michal = zuuluu.readSnapshot;
                    entity = _closure2_slot0;
                    entity = entity.LATEST_SNAPSHOT_VERSION;
                    entity = michal.bind(zuuluu)(entity);
                    michal = null;
                    if(!(michal != entity)) { _fun00022_ip = 101; continue _fun00021 }
 33:
                    report = _closure1_slot28;
                    tangon = entity.linkedUsers;
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    report = _closure1_slot31;
                    tangon = entity.guilds;
                    tangon = report.bind(zuuluu)(tangon);
                    tangon = _closure1_slot30;
                    michal = entity.teenActivity;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = entity.teenActivityTotals;
                    entity = function(argFoo) { // Original name: teenActivityTotalsFromSnapshot
                        oscard = argFoo;
                        report = oscard.reduce;
                        michal = _closure1_slot27;
                        entity = undefined;
                        tangon = michal.bind(entity)();
                        michal = function(argFoo, argBar) {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                zuuluu = argFoo;
                                tangon = argBar;
                                michal = tangon.split;
                                entity = ':';
                                report = michal.bind(tangon)(entity);
                                tangon = _closure1_slot8;
                                golfie = undefined;
                                michal = 2;
                                report = tangon.bind(golfie)(report, michal);
                                michal = 0;
                                tangon = report[michal];
                                michal = 1;
                                oscard = report[michal];
                                michal = _closure1_slot0;
                                report = _closure1_slot2;
                                entity = 13;
                                entity = report[entity];
                                michal = michal.bind(golfie)(entity);
                                entity = michal.displayTypeFromString;
                                tangon = entity.bind(michal)(tangon);
                                entity = zuuluu;
                                if(!(golfie !== tangon)) { _fun00024_ip = 126; continue _fun00023 }
 89:
                                michal = {};
                                verify = michal;
                                option = zuuluu;
                                zuuluu = copyDataProperties(verify, option);
                                zuuluu = global;
                                report = zuuluu.parseInt;
                                zuuluu = 10;
                                zuuluu = report.bind(golfie)(oscard, zuuluu);
                                michal[tangon] = zuuluu;
                                entity = michal;
 126:
                                return entity;
                            }
                        };
                        michal = report.bind(oscard)(michal, tangon);
                        _closure1_slot17 = michal;
                        return entity;
                    };
                    entity = entity.bind(zuuluu)(michal);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'takeSnapshot';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = {};
                michal = _closure2_slot0;
                michal = michal.LATEST_SNAPSHOT_VERSION;
                entity['version'] = michal;
                michal = {};
                tangon = global;
                option = tangon.Object;
                golfie = option.values;
                report = _closure1_slot15;
                report = golfie.bind(option)(report);
                michal['linkedUsers'] = report;
                option = tangon.Object;
                golfie = option.entries;
                report = _closure1_slot17;
                option = golfie.bind(option)(report);
                golfie = option.map;
                report = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu[Symbol.iterator];
                        zuuluu = entity().next;
                        tangon = zuuluu().value;
                        michal = entity;
                        golfie = undefined;
                        michal = michal === golfie;
                        report = undefined;
                        if(michal) { _fun00026_ip = 27; continue _fun00025 }
 24:
                        report = tangon;
 27:
                        tangon = undefined;
                        if(michal) { _fun00026_ip = 57; continue _fun00025 }
 32:
                        oscard = zuuluu().value;
                        zuuluu = entity;
                        zuuluu = zuuluu === golfie;
                        tangon = undefined;
                        michal = zuuluu;
                        if(zuuluu) { _fun00026_ip = 57; continue _fun00025 }
 51:
                        tangon = oscard;
                        michal = zuuluu;
 57:
                        if(michal) { _fun00026_ip = 63; continue _fun00025 }
 60:
                        entity.return();
 63:
                        entity = global;
                        entity = entity.HermesInternal;
                        zuuluu = entity.concat;
                        michal = '';
                        entity = ':';
                        entity = zuuluu.bind(michal)(report, entity, tangon);
                        return entity;
                    }
                };
                report = golfie.bind(option)(report);
                michal['teenActivityTotals'] = report;
                report = new Array(0);
                var _closure3_slot0 = report;
                verify = tangon.Object;
                option = verify.entries;
                golfie = _closure1_slot16;
                option = option.bind(verify)(golfie);
                golfie = option.forEach;
                oscard = function(argFoo) {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        entity = tangon().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        oscard = undefined;
                        if(zuuluu) { _fun00028_ip = 49; continue _fun00027 }
 24:
                        report = tangon().value;
                        tangon = michal;
                        tangon = tangon === entity;
                        oscard = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00028_ip = 49; continue _fun00027 }
 43:
                        oscard = report;
                        zuuluu = tangon;
 49:
                        if(zuuluu) { _fun00028_ip = 55; continue _fun00027 }
 52:
                        michal.return();
 55:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.push;
                        michal = global;
                        report = michal.Object;
                        michal = report.values;
                        verify = michal.bind(report)(oscard);
                        michal = new Array(0);
                        option = 0;
                        offset = michal;
                        report = arraySpread(offset, verify, option);
                        offset = zuuluu;
                        verify = michal;
                        option = tangon;
                        michal = apply(offset, verify, option);
                        return entity;
                    }
                };
                oscard = golfie.bind(option)(oscard);
                michal['teenActivity'] = report;
                report = tangon.Object;
                tangon = report.values;
                zuuluu = _closure1_slot24;
                zuuluu = tangon.bind(report)(zuuluu);
                michal['guilds'] = zuuluu;
                entity['data'] = michal;
                return entity;
            };
            report['value'] = golfie;
            entity[2] = report;
            report = {};
            golfie = 'getSelectedTeenId';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot13;
                return entity;
            };
            report['value'] = golfie;
            entity[3] = report;
            report = {};
            golfie = 'getLinkedUsers';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot15;
                return entity;
            };
            report['value'] = golfie;
            entity[4] = report;
            report = {};
            golfie = 'getLinkTimestamp';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    michal = _closure1_slot15;
                    entity = argFoo;
                    zuuluu = michal[entity];
                    tangon = null;
                    michal = tangon == zuuluu;
                    entity = null;
                    if(michal) { _fun00030_ip = 44; continue _fun00029 }
 25:
                    michal = zuuluu.updated_at;
                    if(!(tangon == michal)) { _fun00030_ip = 41; continue _fun00029 }
 35:
                    michal = zuuluu.created_at;
 41:
                    entity = michal;
 44:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[5] = report;
            report = {};
            golfie = 'getRangeStartTimestamp';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = _closure1_slot14;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    if(zuuluu) { _fun00032_ip = 53; continue _fun00031 }
 16:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.extractTimestamp;
                    michal = _closure1_slot14;
                    entity = zuuluu.bind(tangon)(michal);
 53:
                    return entity;
                }
            };
            report['value'] = golfie;
            entity[6] = report;
            report = {};
            golfie = 'getActionsForDisplayType';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.values;
                tangon = _closure1_slot16;
                entity = argFoo;
                entity = tangon[entity];
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report['value'] = golfie;
            entity[7] = report;
            report = {};
            golfie = 'getTotalForDisplayType';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                michal = _closure1_slot17;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report['value'] = golfie;
            entity[8] = report;
            report = {};
            golfie = 'getLinkCode';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot18;
                return entity;
            };
            report['value'] = golfie;
            entity[9] = report;
            report = {};
            golfie = 'getGuild';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                michal = _closure1_slot24;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report['value'] = golfie;
            entity[10] = report;
            report = {};
            golfie = 'getSelectedTab';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot19;
                return entity;
            };
            report['value'] = golfie;
            entity[11] = report;
            report = {};
            golfie = 'getStartId';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot14;
                return entity;
            };
            report['value'] = golfie;
            entity[12] = report;
            report = {};
            golfie = 'getIsInitialized';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot20;
                return entity;
            };
            report['value'] = golfie;
            entity[13] = report;
            report = {};
            golfie = 'getUserCountry';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot23;
                return entity;
            };
            report['value'] = golfie;
            entity[14] = report;
            report = {};
            golfie = 'isLoading';
            report['key'] = golfie;
            golfie = function() { // Original name: value
                entity = _closure1_slot21;
                return entity;
            };
            report['value'] = golfie;
            entity[15] = report;
            report = {};
            golfie = 'canRefetch';
            report['key'] = golfie;
            oscard = function() { // Original name: value
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = _closure1_slot22;
                    entity = null;
                    entity = entity === zuuluu;
                    if(entity) { _fun00034_ip = 61; continue _fun00033 }
 16:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.age;
                    zuuluu = _closure1_slot22;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = _closure1_slot11;
                    entity = zuuluu > michal;
 61:
                    return entity;
                }
            };
            report['value'] = oscard;
            entity[16] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        michal = michal.bind(entity)(golfie);
        golfie = 'FamilyCenterStore';
        michal['displayName'] = golfie;
        michal['LATEST_SNAPSHOT_VERSION'] = tangon;
        tangon = michal.prototype;
        tangon = Object.create(tangon, {constructor: {value: michal}});
        result = tangon;
        michal = new result[michal](output);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 14;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/parent_tools/FamilyCenterStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();