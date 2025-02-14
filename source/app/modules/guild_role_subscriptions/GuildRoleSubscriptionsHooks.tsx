// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    oscar = argBaz;
    report = argCorge;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = report;
    var _closure1_slot3 = verify;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun96592: for(var _fun96592_ip = 0; ; ) switch(_fun96592_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun96592_ip = 46; continue _fun96592 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun96592_ip = 55; continue _fun96592 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun96592_ip = 345; continue _fun96592 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun96592_ip = 323; continue _fun96592 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun96592_ip = 283; continue _fun96592 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun96592_ip = 270; continue _fun96592 }
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
            if(!golf) { _fun96592_ip = 163; continue _fun96592 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun96592_ip = 179; continue _fun96592 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun96592_ip = 249; continue _fun96592 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun96592_ip = 249; continue _fun96592 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun96592_ip = 234; continue _fun96592 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun96592_ip = 247; continue _fun96592 }
 234:
            verify = _closure1_slot15;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun96592_ip = 265; continue _fun96592;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun96592_ip = 283; continue _fun96592;
 270:
            golf = _closure1_slot15;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun96592_ip = 323; continue _fun96592 }
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
            if(!tango) { _fun96592_ip = 330; continue _fun96592 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun96593: for(var _fun96593_ip = 0; ; ) switch(_fun96593_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun96593_ip = 56; continue _fun96593 }
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
                    _fun96593_ip = 67; continue _fun96593;
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
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun96594: for(var _fun96594_ip = 0; ; ) switch(_fun96594_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun96594_ip = 23; continue _fun96594 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun96594_ip = 33; continue _fun96594 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun96594_ip = 70; continue _fun96594 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun96594_ip = 55; continue _fun96594 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = verify[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = verify[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = verify[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    report = verify[tango];
    report = oscar.bind(entity)(report);
    var _closure1_slot8 = report;
    tango = verify[tango];
    tango = options.bind(entity)(tango);
    tango = tango.FetchState;
    var _closure1_slot9 = tango;
    tango = new Array(0);
    var _closure1_slot10 = tango;
    oscar = function(argFoo) { // Original name: useFetchListingsForGuild
        _fun96595: for(var _fun96595_ip = 0; ; ) switch(_fun96595_ip) {
 0:
            backup = argFoo;
            mike = arguments[1];
            var _closure2_slot0 = backup;
            report = undefined;
            if(!(mike === report)) { _fun96595_ip = 20; continue _fun96595 }
 18:
            mike = {};
 20:
            romeo = mike.refetchOnMount;
            if(!(romeo === report)) { _fun96595_ip = 32; continue _fun96595 }
 30:
            romeo = false;
 32:
            var _closure2_slot1 = romeo;
            foxtrot = mike.includeSoftDeleted;
            if(!(foxtrot === report)) { _fun96595_ip = 48; continue _fun96595 }
 46:
            foxtrot = true;
 48:
            var _closure2_slot2 = foxtrot;
            yankee = mike.countryCode;
            var _closure2_slot3 = yankee;
            offset = mike.dontFetchWhileTrue;
            var _closure2_slot4 = offset;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            tango = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 5;
            oscar = golf[zulu];
            kilo = tango.bind(report)(oscar);
            verify = kilo.useStateFromStores;
            oscar = _closure1_slot7;
            options = new Array(1);
            options[0] = oscar;
            oscar = function() {
                mike = _closure1_slot7;
                entity = mike.isConnected;
                entity = entity.bind(mike)();
                return entity;
            };
            kilo = verify.bind(kilo)(options, oscar);
            _closure2_slot5 = kilo;
            zulu = golf[zulu];
            options = tango.bind(report)(zulu);
            oscar = options.useStateFromStores;
            zulu = _closure1_slot8;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun96597: for(var _fun96597_ip = 0; ; ) switch(_fun96597_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    if(!(entity == zulu)) { _fun96597_ip = 28; continue _fun96597 }
 13:
                    entity = _closure1_slot9;
                    entity = entity.FETCHED;
                    _fun96597_ip = 50; continue _fun96597;
 28:
                    tango = _closure1_slot8;
                    zulu = tango.getSubscriptionGroupListingsForGuildFetchState;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 50:
                    return entity;
                }
            };
            zulu = oscar.bind(options)(tango, zulu);
            verify = _closure1_slot6;
            tango = verify.useRef;
            tango = tango.bind(verify)(romeo);
            _closure2_slot6 = tango;
            options = verify.useEffect;
            oscar = new Array(6);
            oscar[0] = kilo;
            oscar[1] = backup;
            oscar[2] = foxtrot;
            oscar[3] = romeo;
            oscar[4] = yankee;
            oscar[5] = offset;
            entity = function() {
                _fun96598: for(var _fun96598_ip = 0; ; ) switch(_fun96598_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = null;
                    if(!(entity != mike)) { _fun96598_ip = 152; continue _fun96598 }
 16:
                    entity = _closure2_slot5;
                    if(!entity) { _fun96598_ip = 152; continue _fun96598 }
 26:
                    mike = _closure2_slot4;
                    entity = true;
                    if(!(entity !== mike)) { _fun96598_ip = 152; continue _fun96598 }
 36:
                    tango = _closure1_slot8;
                    zulu = tango.getSubscriptionGroupListingsForGuildFetchState;
                    mike = _closure2_slot0;
                    tango = zulu.bind(tango)(mike);
                    mike = _closure2_slot1;
                    if(mike) { _fun96598_ip = 79; continue _fun96598 }
 65:
                    zulu = _closure1_slot9;
                    zulu = zulu.NOT_FETCHED;
                    mike = tango === zulu;
 79:
                    if(!mike) { _fun96598_ip = 152; continue _fun96598 }
 82:
                    zulu = _closure2_slot6;
                    mike = false;
                    zulu['current'] = mike;
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.fetchAllSubscriptionListingsDataForGuild;
                    mike = _closure2_slot0;
                    entity = {};
                    oscar = _closure2_slot2;
                    entity['includeSoftDeleted'] = oscar;
                    report = _closure2_slot3;
                    entity['countryCode'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 152:
                    entity = undefined;
                    return entity;
                }
            };
            entity = options.bind(verify)(entity, oscar);
            oscar = _closure1_slot1;
            entity = 7;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            tango = entity.bind(report)(tango);
            entity = {};
            mike = _closure1_slot9;
            mike = mike.FETCHED;
            mike = zulu === mike;
            if(!mike) { _fun96595_ip = 286; continue _fun96595 }
 280:
            zulu = true;
            mike = zulu !== tango;
 286:
            entity['listingsLoaded'] = mike;
            return entity;
        }
    };
    var _closure1_slot11 = oscar;
    report = function(argFoo) { // Original name: useSubscriptionListingsForGroup
        _fun96599: for(var _fun96599_ip = 0; ; ) switch(_fun96599_ip) {
 0:
            options = argFoo;
            mike = arguments[1];
            var _closure2_slot0 = options;
            report = undefined;
            if(!(mike === report)) { _fun96599_ip = 20; continue _fun96599 }
 18:
            mike = {};
 20:
            golf = mike.includeSoftDeleted;
            if(!(golf === report)) { _fun96599_ip = 32; continue _fun96599 }
 30:
            golf = false;
 32:
            var _closure2_slot1 = golf;
            oscar = mike.includeUnpublished;
            if(!(oscar === report)) { _fun96599_ip = 48; continue _fun96599 }
 46:
            oscar = true;
 48:
            var _closure2_slot2 = oscar;
            tango = _closure1_slot0;
            verify = _closure1_slot3;
            zulu = 5;
            zulu = verify[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStoresArray;
            mike = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(3);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            entity = function() {
                _fun96600: for(var _fun96600_ip = 0; ; ) switch(_fun96600_ip) {
 0:
                    entity = _closure2_slot0;
                    golf = null;
                    if(!(golf != entity)) { _fun96600_ip = 167; continue _fun96600 }
 16:
                    zulu = _closure1_slot8;
                    mike = zulu.getSubscriptionGroupListing;
                    entity = _closure2_slot0;
                    mike = mike.bind(zulu)(entity);
                    if(!(golf != mike)) { _fun96600_ip = 161; continue _fun96600 }
 42:
                    entity = new Array(0);
                    zulu = _closure1_slot14;
                    mike = mike.subscription_listings_ids;
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun96600_ip = 159; continue _fun96600 }
 75:
                    offset = zulu.value;
                    verify = _closure1_slot8;
                    mike = verify.getSubscriptionListing;
                    verify = mike.bind(verify)(offset);
                    if(!(golf != verify)) { _fun96600_ip = 144; continue _fun96600 }
 99:
                    mike = verify.soft_deleted;
                    if(!mike) { _fun96600_ip = 115; continue _fun96600 }
 108:
                    offset = _closure2_slot1;
                    mike = !offset;
 115:
                    if(mike) { _fun96600_ip = 144; continue _fun96600 }
 118:
                    mike = verify.published;
                    if(mike) { _fun96600_ip = 131; continue _fun96600 }
 127:
                    mike = _closure2_slot2;
 131:
                    if(!mike) { _fun96600_ip = 144; continue _fun96600 }
 134:
                    mike = entity.push;
                    mike = mike.bind(entity)(verify);
 144:
                    verify = tango.bind(report)();
                    mike = verify.done;
                    zulu = verify;
                    if(!mike) { _fun96600_ip = 75; continue _fun96600 }
 159:
                    return entity;
 161:
                    entity = new Array(0);
                    return entity;
 167:
                    entity = new Array(0);
                    return entity;
                }
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    var _closure1_slot12 = report;
    tango = function(argFoo) { // Original name: useSubscriptionListingsForGuild
        _fun96601: for(var _fun96601_ip = 0; ; ) switch(_fun96601_ip) {
 0:
            tango = argFoo;
            mike = arguments[1];
            var _closure2_slot0 = tango;
            report = undefined;
            if(!(mike === report)) { _fun96601_ip = 32; continue _fun96601 }
 18:
            mike = {'includeSoftDeleted': false, 'sortDeletedListingsLast': false};
 32:
            var _closure2_slot1 = mike;
            zulu = _closure1_slot11;
            zulu = zulu.bind(report)(tango);
            tango = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 5;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.useStateFromStoresArray;
            report = _closure1_slot8;
            mike = new Array(1);
            mike[0] = report;
            entity = function() {
                _fun96602: for(var _fun96602_ip = 0; ; ) switch(_fun96602_ip) {
 0:
                    oscar = new Array(0);
                    tango = _closure1_slot14;
                    entity = _closure2_slot0;
                    verify = null;
                    if(!(verify == entity)) { _fun96602_ip = 32; continue _fun96602 }
 26:
                    entity = _closure1_slot10;
                    _fun96602_ip = 51; continue _fun96602;
 32:
                    options = _closure1_slot8;
                    golf = options.getSubscriptionGroupListingsForGuild;
                    report = _closure2_slot0;
                    entity = golf.bind(options)(report);
 51:
                    options = undefined;
                    golf = tango.bind(options)(entity);
                    tango = golf.bind(options)();
                    entity = tango.done;
                    report = tango;
                    tango = undefined;
                    if(entity) { _fun96602_ip = 208; continue _fun96602 }
 78:
                    yankee = _closure1_slot14;
                    entity = report.value;
                    entity = entity.subscription_listings_ids;
                    romeo = yankee.bind(options)(entity);
                    yankee = romeo.bind(options)();
                    entity = yankee.done;
                    if(entity) { _fun96602_ip = 193; continue _fun96602 }
 110:
                    backup = yankee.value;
                    foxtrot = _closure1_slot8;
                    entity = foxtrot.getSubscriptionListing;
                    foxtrot = entity.bind(foxtrot)(backup);
                    entity = verify == foxtrot;
                    if(entity) { _fun96602_ip = 162; continue _fun96602 }
 137:
                    backup = _closure2_slot1;
                    backup = backup.includeSoftDeleted;
                    backup = !backup;
                    if(!backup) { _fun96602_ip = 159; continue _fun96602 }
 153:
                    backup = foxtrot.soft_deleted;
 159:
                    entity = backup;
 162:
                    if(entity) { _fun96602_ip = 175; continue _fun96602 }
 165:
                    entity = oscar.push;
                    entity = entity.bind(oscar)(foxtrot);
 175:
                    backup = romeo.bind(options)();
                    entity = backup.done;
                    yankee = backup;
                    tango = foxtrot;
                    if(!entity) { _fun96602_ip = 110; continue _fun96602 }
 193:
                    yankee = golf.bind(options)();
                    entity = yankee.done;
                    report = yankee;
                    if(!entity) { _fun96602_ip = 78; continue _fun96602 }
 208:
                    entity = _closure2_slot1;
                    tango = entity.includeSoftDeleted;
                    entity = oscar;
                    if(!tango) { _fun96602_ip = 297; continue _fun96602 }
 224:
                    mike = _closure2_slot1;
                    mike = mike.sortDeletedListingsLast;
                    entity = oscar;
                    if(!mike) { _fun96602_ip = 297; continue _fun96602 }
 240:
                    tango = oscar.filter;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.soft_deleted;
                        entity = !entity;
                        return entity;
                    };
                    output = tango.bind(oscar)(mike);
                    mike = new Array(0);
                    sizing = 0;
                    result = mike;
                    sizing = arraySpread(result, output, sizing);
                    report = oscar.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.soft_deleted;
                        return entity;
                    };
                    output = report.bind(oscar)(zulu);
                    result = mike;
                    zulu = arraySpread(result, output, sizing);
                    entity = mike;
 297:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    golf = 12;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx';
    golf = options.bind(verify)(golf);
    zulu['useFetchListingsForGuild'] = oscar;
    oscar = function() {
        offset = _closure1_slot6;
        tango = offset.useState;
        mike = false;
        mike = tango.bind(offset)(mike);
        options = _closure1_slot5;
        zulu = undefined;
        golf = 2;
        report = options.bind(zulu)(mike, golf);
        mike = 0;
        tango = report[mike];
        oscar = 1;
        report = report[oscar];
        var _closure2_slot0 = report;
        verify = offset.useState;
        report = null;
        report = verify.bind(offset)(report);
        report = options.bind(zulu)(report, golf);
        mike = report[mike];
        report = report[oscar];
        var _closure2_slot1 = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun96608: for(var _fun96608_ip = 0; ; ) switch(_fun96608_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96608_ip = 156; continue _fun96608 }
 10:
                        tango = argFoo;
                        mike = argBar;
                        golf = _closure2_slot0;
                        report = undefined;
                        oscar = true;
                        oscar = golf.bind(report)(oscar);
                        golf = _closure2_slot1;
                        oscar = null;
                        oscar = golf.bind(report)(oscar);
 43: // try_start_0 // try_start_1
                        golf = _closure1_slot2;
                        options = _closure1_slot3;
                        oscar = 6;
                        oscar = options[oscar];
                        golf = golf.bind(report)(oscar);
                        oscar = golf.createSubscriptionGroupListing;
                        mike = oscar.bind(golf)(tango, mike);
                        SaveGenerator(address=82);
 80:
                        return mike;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun96608_ip = 102; continue _fun96608 }
 88: // try_end0 // try_end1
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 102:
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 116: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        mike = _closure2_slot1;
                        mike = mike.bind(report)(tango);
 127: // try_end2
                        tango = _closure2_slot0;
                        mike = false;
                        mike = tango.bind(report)(mike);
                        return report;
 141: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 156:
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
        zulu = entity.bind(zulu)();
        entity = {};
        entity['loading'] = tango;
        entity['createSubscriptionGroupListing'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useCreateSubscriptionGroupListing'] = oscar;
    oscar = function() {
        oscar = _closure1_slot6;
        tango = oscar.useState;
        mike = false;
        mike = tango.bind(oscar)(mike);
        verify = _closure1_slot5;
        zulu = undefined;
        options = 2;
        report = verify.bind(zulu)(mike, options);
        mike = 0;
        tango = report[mike];
        golf = 1;
        report = report[golf];
        var _closure2_slot0 = report;
        offset = oscar.useState;
        report = null;
        report = offset.bind(oscar)(report);
        report = verify.bind(zulu)(report, options);
        mike = report[mike];
        report = report[golf];
        var _closure2_slot1 = report;
        report = oscar.useCallback;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun96613: for(var _fun96613_ip = 0; ; ) switch(_fun96613_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96613_ip = 160; continue _fun96613 }
 10:
                        oscar = argFoo;
                        tango = argBar;
                        mike = argBaz;
                        options = _closure2_slot0;
                        report = undefined;
                        golf = true;
                        golf = options.bind(report)(golf);
                        options = _closure2_slot1;
                        golf = null;
                        golf = options.bind(report)(golf);
 46: // try_start_0 // try_start_1
                        options = _closure1_slot2;
                        verify = _closure1_slot3;
                        golf = 6;
                        golf = verify[golf];
                        options = options.bind(report)(golf);
                        golf = options.updateSubscriptionGroupListing;
                        mike = golf.bind(options)(oscar, tango, mike);
                        SaveGenerator(address=86);
 84:
                        return mike;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun96613_ip = 106; continue _fun96613 }
 92: // try_end0 // try_end1
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 106:
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 120: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        mike = _closure2_slot1;
                        mike = mike.bind(report)(tango);
 131: // try_end2
                        tango = _closure2_slot0;
                        mike = false;
                        mike = tango.bind(report)(mike);
                        return report;
 145: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 160:
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
        zulu = entity.bind(zulu)();
        entity = new Array(0);
        zulu = report.bind(oscar)(zulu, entity);
        entity = {};
        entity['loading'] = tango;
        entity['updateSubscriptionGroupListing'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useUpdateSubscriptionGroupListing'] = oscar;
    zulu['useSubscriptionListingsForGroup'] = report;
    report = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot8;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun96616: for(var _fun96616_ip = 0; ; ) switch(_fun96616_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                zulu = entity != zulu;
                if(!zulu) { _fun96616_ip = 38; continue _fun96616 }
 16:
                tango = _closure1_slot8;
                zulu = tango.getSubscriptionListing;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 38:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSubscriptionListing'] = report;
    report = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot8;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun96618: for(var _fun96618_ip = 0; ; ) switch(_fun96618_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                zulu = entity != zulu;
                if(!zulu) { _fun96618_ip = 38; continue _fun96618 }
 16:
                tango = _closure1_slot8;
                zulu = tango.getSubscriptionGroupListing;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 38:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSubscriptionGroupListing'] = report;
    report = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        oscar = _closure1_slot3;
        zulu = 8;
        zulu = oscar[zulu];
        tango = undefined;
        options = report.bind(tango)(zulu);
        golf = options.useGroupListingsFetchContext;
        zulu = 'useGroupListingsForGuild';
        zulu = golf.bind(options)(zulu);
        var _closure2_slot1 = zulu;
        zulu = 5;
        zulu = oscar[zulu];
        tango = report.bind(tango)(zulu);
        zulu = tango.useStateFromStores;
        report = _closure1_slot8;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun96620: for(var _fun96620_ip = 0; ; ) switch(_fun96620_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity != zulu)) { _fun96620_ip = 20; continue _fun96620 }
 13:
                entity = _closure2_slot1;
                if(entity) { _fun96620_ip = 29; continue _fun96620 }
 20:
                entity = _closure1_slot10;
                _fun96620_ip = 51; continue _fun96620;
 29:
                tango = _closure1_slot8;
                zulu = tango.getSubscriptionGroupListingsForGuild;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 51:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useGroupListingsForGuild'] = report;
    zulu['useSubscriptionListingsForGuild'] = tango;
    tango = function(argFoo) {
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        oscar = report.useState;
        mike = false;
        golf = oscar.bind(report)(mike);
        oscar = _closure1_slot5;
        options = undefined;
        mike = 2;
        golf = oscar.bind(options)(golf, mike);
        mike = 0;
        mike = golf[mike];
        var _closure2_slot1 = mike;
        oscar = 1;
        oscar = golf[oscar];
        var _closure2_slot2 = oscar;
        golf = report.useMemo;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.getRoleSubscriptionPlanId;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = golf.bind(report)(zulu, oscar);
        var _closure2_slot3 = zulu;
        golf = _closure1_slot0;
        verify = _closure1_slot3;
        oscar = 5;
        oscar = verify[oscar];
        options = golf.bind(options)(oscar);
        golf = options.useStateFromStoresArray;
        tango = _closure1_slot8;
        oscar = new Array(1);
        oscar[0] = tango;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            zulu = _closure2_slot3;
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot8;
                mike = zulu.getDidFetchListingForSubscriptionPlanId;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = golf.bind(options)(oscar, zulu, tango);
        var _closure2_slot4 = oscar;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = oscar;
        entity = function() {
            _fun96625: for(var _fun96625_ip = 0; ; ) switch(_fun96625_ip) {
 0:
                zulu = _closure2_slot1;
                zulu = !zulu;
                if(!zulu) { _fun96625_ip = 30; continue _fun96625 }
 15:
                tango = _closure2_slot4;
                report = tango.length;
                tango = 0;
                zulu = report > tango;
 30:
                if(!zulu) { _fun96625_ip = 121; continue _fun96625 }
 33:
                report = _closure2_slot2;
                tango = undefined;
                zulu = true;
                zulu = report.bind(tango)(zulu);
                zulu = global;
                tango = zulu.Promise;
                zulu = tango.all;
                oscar = _closure2_slot4;
                report = oscar.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.fetchSubscriptionListingForPlan;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = report.bind(oscar)(mike);
                tango = zulu.bind(tango)(mike);
                zulu = tango.catch;
                mike = function() {
                    entity = undefined;
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.then;
                entity = function() {
                    zulu = _closure2_slot2;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 121:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(entity, zulu);
        entity = {};
        entity['loading'] = mike;
        return entity;
    };
    zulu['useFetchListingsForSubscriptions'] = tango;
    tango = function() {
        offset = _closure1_slot6;
        tango = offset.useState;
        zulu = false;
        zulu = tango.bind(offset)(zulu);
        options = _closure1_slot5;
        mike = undefined;
        golf = 2;
        report = options.bind(mike)(zulu, golf);
        tango = 0;
        zulu = report[tango];
        oscar = 1;
        report = report[oscar];
        var _closure2_slot0 = report;
        verify = offset.useState;
        report = null;
        report = verify.bind(offset)(report);
        report = options.bind(mike)(report, golf);
        tango = report[tango];
        report = report[oscar];
        var _closure2_slot1 = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun96632: for(var _fun96632_ip = 0; ; ) switch(_fun96632_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96632_ip = 170; continue _fun96632 }
 10:
                        golf = argFoo;
                        oscar = argBar;
                        mike = argBaz;
 19: // try_start_0 // try_start_1
                        options = _closure2_slot0;
                        report = undefined;
                        tango = true;
                        options = options.bind(report)(tango);
                        verify = _closure2_slot1;
                        options = null;
                        options = verify.bind(report)(options);
                        verify = _closure1_slot2;
                        offset = _closure1_slot3;
                        options = 6;
                        options = offset[options];
                        verify = verify.bind(report)(options);
                        options = verify.deleteSubscriptionListing;
                        mike = options.bind(verify)(golf, oscar, mike);
                        SaveGenerator(address=86);
 84:
                        return mike;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(oscar) { _fun96632_ip = 106; continue _fun96632 }
 92: // try_end0 // try_end1
                        golf = _closure2_slot0;
                        oscar = false;
                        oscar = golf.bind(report)(oscar);
                        return tango;
 106:
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        return mike;
 120: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        tango = _closure2_slot1;
                        mike = undefined;
                        tango = tango.bind(mike)(report);
 136: // try_end2
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(mike)(zulu);
                        return mike;
 150: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        report = _closure2_slot0;
                        tango = undefined;
                        zulu = false;
                        zulu = report.bind(tango)(zulu);
                        throw mike;
 170:
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
        mike = entity.bind(mike)();
        entity = {};
        entity['error'] = tango;
        entity['submitting'] = zulu;
        entity['deleteSubscriptionListing'] = mike;
        return entity;
    };
    zulu['useDeleteSubscriptionListing'] = tango;
    tango = function() {
        zulu = _closure1_slot1;
        oscar = _closure1_slot3;
        mike = 10;
        mike = oscar[mike];
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        report = _closure1_slot2;
        mike = 6;
        mike = oscar[mike];
        mike = report.bind(tango)(mike);
        mike = mike.archiveSubscriptionListing;
        zulu = zulu.bind(tango)(mike);
        mike = _closure1_slot5;
        entity = 2;
        zulu = mike.bind(tango)(zulu, entity);
        entity = 0;
        mike = zulu[entity];
        entity = 1;
        tango = zulu[entity];
        zulu = tango.loading;
        entity = {};
        tango = tango.error;
        entity['error'] = tango;
        entity['submitting'] = zulu;
        entity['archiveSubscriptionListing'] = mike;
        return entity;
    };
    zulu['useArchiveSubscriptionListing'] = tango;
    tango = function() {
        offset = _closure1_slot6;
        tango = offset.useState;
        entity = false;
        entity = tango.bind(offset)(entity);
        options = _closure1_slot5;
        zulu = undefined;
        golf = 2;
        entity = options.bind(zulu)(entity, golf);
        report = 0;
        tango = entity[report];
        oscar = 1;
        entity = entity[oscar];
        var _closure2_slot0 = entity;
        verify = offset.useState;
        entity = null;
        entity = verify.bind(offset)(entity);
        entity = options.bind(zulu)(entity, golf);
        report = entity[report];
        entity = entity[oscar];
        var _closure2_slot1 = entity;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun96638: for(var _fun96638_ip = 0; ; ) switch(_fun96638_ip) {
 0:
                        StartGenerator();
                        mike = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96638_ip = 218; continue _fun96638 }
 13:
                        yankee = mike.guildId;
                        offset = mike.groupListingId;
                        verify = mike.listingId;
                        oscar = undefined;
                        SaveGenerator(address=36);
 34:
                        return oscar;
 36:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun96638_ip = 215; continue _fun96638 }
 45: // try_start_0 // try_start_1
                        zulu = _closure2_slot0;
                        report = true;
                        zulu = zulu.bind(oscar)(report);
                        golf = _closure2_slot1;
                        zulu = null;
                        zulu = golf.bind(oscar)(zulu);
                        golf = _closure1_slot2;
                        options = _closure1_slot3;
                        zulu = 6;
                        zulu = options[zulu];
                        options = golf.bind(oscar)(zulu);
                        golf = options.updateSubscriptionListing;
                        zulu = {};
                        zulu['guildId'] = yankee;
                        zulu['groupListingId'] = offset;
                        zulu['listingId'] = verify;
                        verify = {};
                        verify['published'] = report;
                        zulu['data'] = verify;
                        zulu = golf.bind(options)(zulu);
                        SaveGenerator(address=135);
 133:
                        return zulu;
 135:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golf) { _fun96638_ip = 155; continue _fun96638 }
 141: // try_end0 // try_end1
                        options = _closure2_slot0;
                        golf = false;
                        golf = options.bind(oscar)(golf);
                        return report;
 155:
                        report = _closure2_slot0;
                        tango = false;
                        tango = report.bind(oscar)(tango);
                        return zulu;
 169: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        tango = _closure2_slot1;
                        tango = tango.bind(oscar)(report);
 183: // try_end2
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(oscar)(zulu);
                        return oscar;
 197: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot0;
                        tango = false;
                        tango = report.bind(oscar)(tango);
                        throw zulu;
 215:
                        return mike;
 218:
                        return entity;
                    }
                };
                mike = entity.next;
                mike = mike.bind(entity)();
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
        zulu = entity.bind(zulu)();
        entity = {};
        entity['error'] = report;
        entity['submitting'] = tango;
        entity['publishSubscriptionListing'] = zulu;
        mike = function() { // Original name: clearError
            zulu = _closure2_slot1;
            mike = undefined;
            entity = null;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        entity['clearError'] = mike;
        return entity;
    };
    zulu['usePublishSubscriptionListing'] = tango;
    tango = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot8;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun96642: for(var _fun96642_ip = 0; ; ) switch(_fun96642_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                zulu = entity != zulu;
                entity = undefined;
                if(!zulu) { _fun96642_ip = 40; continue _fun96642 }
 18:
                tango = _closure1_slot8;
                zulu = tango.getSubscriptionSettings;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 40:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSubscriptionsSettings'] = tango;
    tango = function() {
        oscar = _closure1_slot6;
        tango = oscar.useState;
        mike = false;
        mike = tango.bind(oscar)(mike);
        verify = _closure1_slot5;
        zulu = undefined;
        options = 2;
        report = verify.bind(zulu)(mike, options);
        mike = 0;
        tango = report[mike];
        golf = 1;
        report = report[golf];
        var _closure2_slot0 = report;
        offset = oscar.useState;
        report = null;
        report = offset.bind(oscar)(report);
        report = verify.bind(zulu)(report, options);
        mike = report[mike];
        report = report[golf];
        var _closure2_slot1 = report;
        report = oscar.useCallback;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun96646: for(var _fun96646_ip = 0; ; ) switch(_fun96646_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96646_ip = 144; continue _fun96646 }
 10:
                        tango = argFoo;
                        mike = argBar;
                        golf = _closure2_slot0;
                        report = undefined;
                        oscar = true;
                        oscar = golf.bind(report)(oscar);
                        golf = _closure2_slot1;
                        oscar = null;
                        oscar = golf.bind(report)(oscar);
 43: // try_start_0 // try_start_1
                        golf = _closure1_slot2;
                        options = _closure1_slot3;
                        oscar = 6;
                        oscar = options[oscar];
                        golf = golf.bind(report)(oscar);
                        oscar = golf.updateSubscriptionsSettings;
                        mike = oscar.bind(golf)(tango, mike);
                        SaveGenerator(address=82);
 80:
                        return mike;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun96646_ip = 90; continue _fun96646 }
 88: // try_end0
                        _fun96646_ip = 115; continue _fun96646;
 90: // try_end1
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 104: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        mike = _closure2_slot1;
                        mike = mike.bind(report)(tango);
 115: // try_end2
                        tango = _closure2_slot0;
                        mike = false;
                        mike = tango.bind(report)(mike);
                        return report;
 129: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 144:
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
        zulu = entity.bind(zulu)();
        entity = new Array(0);
        zulu = report.bind(oscar)(zulu, entity);
        entity = {};
        entity['loading'] = tango;
        entity['updateSubscriptionsSettings'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useUpdateSubscriptionsSettings'] = tango;
    tango = function() {
        offset = _closure1_slot6;
        tango = offset.useState;
        zulu = false;
        zulu = tango.bind(offset)(zulu);
        options = _closure1_slot5;
        mike = undefined;
        golf = 2;
        report = options.bind(mike)(zulu, golf);
        tango = 0;
        zulu = report[tango];
        oscar = 1;
        report = report[oscar];
        var _closure2_slot0 = report;
        verify = offset.useState;
        report = null;
        report = verify.bind(offset)(report);
        report = options.bind(mike)(report, golf);
        tango = report[tango];
        report = report[oscar];
        var _closure2_slot1 = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun96651: for(var _fun96651_ip = 0; ; ) switch(_fun96651_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96651_ip = 166; continue _fun96651 }
 10:
                        tango = argFoo;
                        mike = argBar;
 16: // try_start_0 // try_start_1
                        golf = _closure2_slot0;
                        report = undefined;
                        oscar = true;
                        oscar = golf.bind(report)(oscar);
                        golf = _closure2_slot1;
                        oscar = null;
                        oscar = golf.bind(report)(oscar);
                        golf = _closure1_slot2;
                        options = _closure1_slot3;
                        oscar = 6;
                        oscar = options[oscar];
                        golf = golf.bind(report)(oscar);
                        oscar = golf.deleteSubscriptionGroupListing;
                        mike = oscar.bind(golf)(tango, mike);
                        SaveGenerator(address=82);
 80:
                        return mike;
 82:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun96651_ip = 102; continue _fun96651 }
 88: // try_end0 // try_end1
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 102:
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        return mike;
 116: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=4);
                        tango = _closure2_slot1;
                        mike = undefined;
                        tango = tango.bind(mike)(report);
 132: // try_end2
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(mike)(zulu);
                        return mike;
 146: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        report = _closure2_slot0;
                        tango = undefined;
                        zulu = false;
                        zulu = report.bind(tango)(zulu);
                        throw mike;
 166:
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
        mike = entity.bind(mike)();
        entity = {};
        entity['error'] = tango;
        entity['submitting'] = zulu;
        entity['deleteSubscriptionGroupListing'] = mike;
        return entity;
    };
    zulu['useDeleteSubscriptionGroupListing'] = tango;
    tango = function() {
        oscar = _closure1_slot6;
        tango = oscar.useState;
        mike = false;
        mike = tango.bind(oscar)(mike);
        verify = _closure1_slot5;
        zulu = undefined;
        options = 2;
        report = verify.bind(zulu)(mike, options);
        mike = 0;
        tango = report[mike];
        golf = 1;
        report = report[golf];
        var _closure2_slot0 = report;
        offset = oscar.useState;
        report = null;
        report = offset.bind(oscar)(report);
        report = verify.bind(zulu)(report, options);
        mike = report[mike];
        report = report[golf];
        var _closure2_slot1 = report;
        report = oscar.useCallback;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun96656: for(var _fun96656_ip = 0; ; ) switch(_fun96656_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96656_ip = 140; continue _fun96656 }
 10:
                        mike = argFoo;
                        oscar = _closure2_slot0;
                        report = undefined;
                        tango = true;
                        tango = oscar.bind(report)(tango);
                        oscar = _closure2_slot1;
                        tango = null;
                        tango = oscar.bind(report)(tango);
 40: // try_start_0 // try_start_1
                        oscar = _closure1_slot2;
                        golf = _closure1_slot3;
                        tango = 6;
                        tango = golf[tango];
                        oscar = oscar.bind(report)(tango);
                        tango = oscar.fetchSubscriptionsSettings;
                        mike = tango.bind(oscar)(mike);
                        SaveGenerator(address=78);
 76:
                        return mike;
 78:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun96656_ip = 86; continue _fun96656 }
 84: // try_end0
                        _fun96656_ip = 111; continue _fun96656;
 86: // try_end1
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 100: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        mike = _closure2_slot1;
                        mike = mike.bind(report)(tango);
 111: // try_end2
                        tango = _closure2_slot0;
                        mike = false;
                        mike = tango.bind(report)(mike);
                        return report;
 125: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 140:
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
        zulu = entity.bind(zulu)();
        entity = new Array(0);
        zulu = report.bind(oscar)(zulu, entity);
        entity = {};
        entity['loading'] = tango;
        entity['fetchSubscriptionsSettings'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useFetchSubscriptionsSettings'] = tango;
    tango = function() {
        oscar = _closure1_slot6;
        tango = oscar.useState;
        mike = false;
        mike = tango.bind(oscar)(mike);
        verify = _closure1_slot5;
        zulu = undefined;
        options = 2;
        report = verify.bind(zulu)(mike, options);
        mike = 0;
        tango = report[mike];
        golf = 1;
        report = report[golf];
        var _closure2_slot0 = report;
        offset = oscar.useState;
        report = null;
        report = offset.bind(oscar)(report);
        report = verify.bind(zulu)(report, options);
        mike = report[mike];
        report = report[golf];
        var _closure2_slot1 = report;
        report = oscar.useCallback;
        entity = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun96661: for(var _fun96661_ip = 0; ; ) switch(_fun96661_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun96661_ip = 148; continue _fun96661 }
 10:
                        oscar = argFoo;
                        tango = argBar;
                        mike = argBaz;
                        options = _closure2_slot0;
                        report = undefined;
                        golf = true;
                        golf = options.bind(report)(golf);
                        options = _closure2_slot1;
                        golf = null;
                        golf = options.bind(report)(golf);
 46: // try_start_0 // try_start_1
                        options = _closure1_slot2;
                        verify = _closure1_slot3;
                        golf = 6;
                        golf = verify[golf];
                        options = options.bind(report)(golf);
                        golf = options.updateSubscriptionTrial;
                        mike = golf.bind(options)(oscar, tango, mike);
                        SaveGenerator(address=86);
 84:
                        return mike;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun96661_ip = 94; continue _fun96661 }
 92: // try_end0
                        _fun96661_ip = 119; continue _fun96661;
 94: // try_end1
                        oscar = _closure2_slot0;
                        tango = false;
                        tango = oscar.bind(report)(tango);
                        return mike;
 108: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=3);
                        mike = _closure2_slot1;
                        mike = mike.bind(report)(tango);
 119: // try_end2
                        tango = _closure2_slot0;
                        mike = false;
                        mike = tango.bind(report)(mike);
                        return report;
 133: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        tango = _closure2_slot0;
                        zulu = false;
                        zulu = tango.bind(report)(zulu);
                        throw mike;
 148:
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
        zulu = entity.bind(zulu)();
        entity = new Array(0);
        zulu = report.bind(oscar)(zulu, entity);
        entity = {};
        entity['loading'] = tango;
        entity['updateSubscriptionTrial'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useUpdateSubscriptionsTrial'] = tango;
    tango = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot8;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun96664: for(var _fun96664_ip = 0; ; ) switch(_fun96664_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                zulu = entity != zulu;
                if(!zulu) { _fun96664_ip = 38; continue _fun96664 }
 16:
                tango = _closure1_slot8;
                zulu = tango.getSubscriptionTrial;
                mike = _closure2_slot0;
                entity = zulu.bind(tango)(mike);
 38:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useSubscriptionTrial'] = tango;
    tango = function(argFoo) {
        tango = _closure1_slot12;
        report = undefined;
        zulu = argFoo;
        oscar = tango.bind(report)(zulu);
        var _closure2_slot0 = oscar;
        tango = _closure1_slot0;
        golf = _closure1_slot3;
        zulu = 5;
        zulu = golf[zulu];
        report = tango.bind(report)(zulu);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot8;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot8;
                mike = zulu.getSubscriptionTrial;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 11;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.isNotNullish;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useSubscriptionTrialsForGroup'] = tango;
    mike = function(argFoo) {
        tango = _closure1_slot13;
        report = undefined;
        zulu = argFoo;
        oscar = tango.bind(report)(zulu);
        var _closure2_slot0 = oscar;
        tango = _closure1_slot0;
        golf = _closure1_slot3;
        zulu = 5;
        zulu = golf[zulu];
        report = tango.bind(report)(zulu);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot8;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            zulu = _closure2_slot0;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot8;
                mike = zulu.getSubscriptionTrial;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            mike = zulu.filter;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            entity = 11;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.isNotNullish;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useSubscriptionTrialsForGuild'] = mike;
    return entity;
})();