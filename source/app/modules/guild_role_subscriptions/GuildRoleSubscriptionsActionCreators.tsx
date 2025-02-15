// app/modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
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
    entity = function() { // Original name: _fetchSubscriptionsSettings
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 109; continue _fun00007 }
 7:
                    report = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    oscar = report.bind(zulu)(mike);
                    report = oscar.getGuildRoleSubscriptionsSettings;
                    mike = argFoo;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=50);
 48:
                    return mike;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 106; continue _fun00007 }
 56:
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 4;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS';
                    tango['type'] = golf;
                    tango['settings'] = mike;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 106:
                    return mike;
 109:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _updateSubscriptionsSettings
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 113; continue _fun00009 }
 7:
                    report = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    golf = report.bind(zulu)(mike);
                    oscar = golf.updateGuildRoleSubscriptionsSettings;
                    report = argFoo;
                    mike = argBar;
                    mike = oscar.bind(golf)(report, mike);
                    SaveGenerator(address=54);
 52:
                    return mike;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 110; continue _fun00009 }
 60:
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 4;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS';
                    tango['type'] = golf;
                    tango['settings'] = mike;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 110:
                    return mike;
 113:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchAllSubscriptionListingsDataForGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00012_ip = 637; continue _fun00011 }
 13:
                    golf = argFoo;
                    zulu = undefined;
                    if(!(mike === zulu)) { _fun00012_ip = 24; continue _fun00011 }
 22:
                    mike = {};
 24:
                    report = mike.includeSoftDeleted;
                    if(!(report === zulu)) { _fun00012_ip = 36; continue _fun00011 }
 34:
                    report = true;
 36:
                    config = report;
                    sequence = mike.countryCode;
                    backup = undefined;
                    foxtrot = undefined;
                    romeo = undefined;
                    yankee = undefined;
                    kilo = undefined;
                    sizing = undefined;
                    output = undefined;
                    result = undefined;
                    SaveGenerator(address=65);
 63:
                    return zulu;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00012_ip = 634; continue _fun00011 }
 74:
                    options = _closure1_slot1;
                    report = _closure1_slot3;
                    oscar = 4;
                    report = report[oscar];
                    verify = options.bind(zulu)(report);
                    options = verify.dispatch;
                    report = {};
                    offset = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS';
                    report['type'] = offset;
                    offset = golf;
                    report['guildId'] = offset;
                    report = options.bind(verify)(report);
 126: // try_start_0
                    report = global;
                    offset = report.Promise;
                    options = offset.all;
                    update = _closure1_slot2;
                    source = _closure1_slot3;
                    verify = 3;
                    report = source[verify];
                    vacuum = update.bind(zulu)(report);
                    echo = vacuum.getGuildRoleSubscriptionGroupListingsForGuild;
                    control = golf;
                    report = {};
                    report['includeSoftDeleted'] = config;
                    report['countryCode'] = sequence;
                    echo = echo.bind(vacuum)(control, report);
                    report = new Array(4);
                    report[0] = echo;
                    echo = source[verify];
                    vacuum = update.bind(zulu)(echo);
                    echo = vacuum.getGuildRoleSubscriptionsSettings;
                    echo = echo.bind(vacuum)(control);
                    report[1] = echo;
                    echo = source[verify];
                    update = update.bind(zulu)(echo);
                    echo = update.getGuildRoleSubscriptionTrials;
                    echo = echo.bind(update)(control);
                    report[2] = echo;
                    update = _closure1_slot0;
                    echo = 5;
                    echo = source[echo];
                    update = update.bind(zulu)(echo);
                    echo = update.fetchSubscriptions;
                    echo = echo.bind(update)();
                    report[3] = echo;
                    report = options.bind(offset)(report);
                    SaveGenerator(address=282);
 280:
                    return report;
 282:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun00012_ip = 583; continue _fun00011 }
 291:
                    options = _closure1_slot4;
                    offset = options.bind(zulu)(report, verify);
                    options = 0;
                    verify = offset[options];
                    foxtrot = verify;
                    options = 1;
                    romeo = offset[options];
                    options = 2;
                    yankee = offset[options];
                    options = _closure1_slot8;
                    options = options.bind(zulu)(verify);
                    kilo = options;
                    options = options.bind(zulu)();
                    backup = options;
                    options = options.done;
                    offset = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
                    verify = null;
                    if(options) { _fun00012_ip = 520; continue _fun00011 }
 362:
                    echo = _closure1_slot8;
                    options = backup;
                    options = options.value;
                    options = options.subscription_listings;
                    result = options;
                    if(!(verify == options)) { _fun00012_ip = 393; continue _fun00011 }
 387:
                    options = new Array(0);
                    _fun00012_ip = 396; continue _fun00011;
 393:
                    options = result;
 396:
                    options = echo.bind(zulu)(options);
                    output = options;
                    options = options.bind(zulu)();
                    sizing = options;
                    options = options.done;
                    if(options) { _fun00012_ip = 499; continue _fun00011 }
 419:
                    options = sizing;
                    source = options.value;
                    echo = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[oscar];
                    update = echo.bind(zulu)(options);
                    echo = update.dispatch;
                    options = {};
                    options['type'] = offset;
                    control = source.id;
                    options['skuId'] = control;
                    source = source.subscription_plans;
                    options['subscriptionPlans'] = source;
                    options = echo.bind(update)(options);
                    options = output;
                    options = options.bind(zulu)();
                    sizing = options;
                    options = options.done;
                    if(!options) { _fun00012_ip = 419; continue _fun00011 }
 499:
                    options = kilo;
                    options = options.bind(zulu)();
                    backup = options;
                    options = options.done;
                    if(!options) { _fun00012_ip = 362; continue _fun00011 }
 520:
                    verify = _closure1_slot1;
                    options = _closure1_slot3;
                    options = options[oscar];
                    offset = verify.bind(zulu)(options);
                    verify = offset.dispatch;
                    options = {};
                    backup = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS';
                    options['type'] = backup;
                    backup = golf;
                    options['guildId'] = backup;
                    options['groupListings'] = foxtrot;
                    options['settings'] = romeo;
                    options['subscriptionTrials'] = yankee;
                    options = verify.bind(offset)(options);
 581: // try_end0
                    _fun00012_ip = 631; continue _fun00011;
 583:
                    return report;
 586: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE';
                    tango['type'] = options;
                    tango['guildId'] = golf;
                    tango = report.bind(oscar)(tango);
 631:
                    return zulu;
 634:
                    return mike;
 637:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _createSubscriptionGroupListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 113; continue _fun00013 }
 7:
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    mike = 3;
                    mike = report[mike];
                    report = undefined;
                    golf = tango.bind(report)(mike);
                    oscar = golf.createGuildRoleSubscriptionGroupListing;
                    tango = argFoo;
                    mike = argBar;
                    mike = oscar.bind(golf)(tango, mike);
                    SaveGenerator(address=54);
 52:
                    return mike;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 110; continue _fun00013 }
 60:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 4;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                    zulu['type'] = oscar;
                    zulu['listing'] = mike;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 110:
                    return mike;
 113:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _updateSubscriptionGroupListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 117; continue _fun00015 }
 7:
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    mike = 3;
                    mike = report[mike];
                    report = undefined;
                    options = tango.bind(report)(mike);
                    golf = options.updateGuildRoleSubscriptionGroupListing;
                    oscar = argFoo;
                    tango = argBar;
                    mike = argBaz;
                    mike = golf.bind(options)(oscar, tango, mike);
                    SaveGenerator(address=58);
 56:
                    return mike;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00016_ip = 114; continue _fun00015 }
 64:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot3;
                    zulu = 4;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                    zulu['type'] = oscar;
                    zulu['listing'] = mike;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 114:
                    return mike;
 117:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _deleteSubscriptionGroupListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    oscar = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00018_ip = 115; continue _fun00017 }
 10:
                    tango = _closure1_slot2;
                    report = _closure1_slot3;
                    mike = 3;
                    mike = report[mike];
                    report = undefined;
                    golf = tango.bind(report)(mike);
                    tango = golf.deleteGuildRoleSubscriptionGroupListing;
                    mike = argFoo;
                    mike = tango.bind(golf)(mike, oscar);
                    SaveGenerator(address=54);
 52:
                    return mike;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00018_ip = 112; continue _fun00017 }
 60:
                    tango = _closure1_slot1;
                    golf = _closure1_slot3;
                    zulu = 4;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING';
                    zulu['type'] = golf;
                    zulu['groupListingId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = true;
                    return zulu;
 112:
                    return mike;
 115:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _fetchSubscriptionListingForPlan
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    romeo = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00020_ip = 295; continue _fun00019 }
 13:
                    tango = _closure1_slot1;
                    report = _closure1_slot3;
                    oscar = 4;
                    mike = report[oscar];
                    zulu = undefined;
                    golf = tango.bind(zulu)(mike);
                    tango = golf.dispatch;
                    mike = {};
                    options = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN';
                    mike['type'] = options;
                    mike['planId'] = romeo;
                    mike = tango.bind(golf)(mike);
                    tango = _closure1_slot2;
                    mike = 3;
                    mike = report[mike];
                    tango = tango.bind(zulu)(mike);
                    mike = tango.getGuildRoleSubscriptionGroupForSubscriptionPlan;
                    mike = mike.bind(tango)(romeo);
                    SaveGenerator(address=96);
 94:
                    return mike;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00020_ip = 292; continue _fun00019 }
 105:
                    report = _closure1_slot1;
                    tango = _closure1_slot3;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS';
                    tango['type'] = golf;
                    tango['groupListing'] = mike;
                    tango = report.bind(oscar)(tango);
                    report = _closure1_slot8;
                    tango = mike.subscription_listings;
                    oscar = null;
                    if(!(oscar == tango)) { _fun00020_ip = 169; continue _fun00019 }
 165:
                    tango = new Array(0);
 169:
                    offset = report.bind(zulu)(tango);
                    report = offset.bind(zulu)();
                    tango = report.done;
                    verify = 6;
                    golf = 0;
                    oscar = report;
                    if(tango) { _fun00020_ip = 289; continue _fun00019 }
 194:
                    tango = oscar.value;
                    report = tango.subscription_plans;
                    report = report[golf];
                    report = report.id;
                    if(!(report === romeo)) { _fun00020_ip = 269; continue _fun00019 }
 218:
                    foxtrot = _closure1_slot2;
                    report = _closure1_slot3;
                    report = report[verify];
                    foxtrot = foxtrot.bind(zulu)(report);
                    report = foxtrot.fetchSubscriptionPlansForSKU;
                    output = tango.id;
                    result = foxtrot;
                    sizing = undefined;
                    kilo = undefined;
                    backup = true;
                    tango = result[report](output, sizing, kilo, backup, foxtrot);
                    SaveGenerator(address=263);
 261:
                    return tango;
 263:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00020_ip = 286; continue _fun00019 }
 269:
                    foxtrot = offset.bind(zulu)();
                    report = foxtrot.done;
                    oscar = foxtrot;
                    if(report) { _fun00020_ip = 289; continue _fun00019 }
 284:
                    _fun00020_ip = 194; continue _fun00019;
 286:
                    return tango;
 289:
                    return zulu;
 292:
                    return mike;
 295:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _deleteSubscriptionListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    golf = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00022_ip = 117; continue _fun00021 }
 10:
                    report = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    options = report.bind(zulu)(mike);
                    oscar = options.deleteGuildRoleSubscriptionListing;
                    report = argFoo;
                    mike = argBar;
                    mike = oscar.bind(options)(report, mike, golf);
                    SaveGenerator(address=58);
 56:
                    return mike;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00022_ip = 114; continue _fun00021 }
 64:
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 4;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING';
                    tango['type'] = options;
                    tango['listingId'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 114:
                    return mike;
 117:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _archiveSubscriptionListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00024_ip = 117; continue _fun00023 }
 7:
                    report = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    options = report.bind(zulu)(mike);
                    golf = options.archiveGuildRoleSubscriptionListing;
                    oscar = argFoo;
                    report = argBar;
                    mike = argBaz;
                    mike = golf.bind(options)(oscar, report, mike);
                    SaveGenerator(address=58);
 56:
                    return mike;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00024_ip = 114; continue _fun00023 }
 64:
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 4;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                    tango['type'] = golf;
                    tango['listing'] = mike;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 114:
                    return mike;
 117:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _updateSubscriptionTrial
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00026_ip = 117; continue _fun00025 }
 7:
                    report = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    options = report.bind(zulu)(mike);
                    golf = options.updateGuildRoleSubscriptionsTrial;
                    oscar = argFoo;
                    report = argBar;
                    mike = argBaz;
                    mike = golf.bind(options)(oscar, report, mike);
                    SaveGenerator(address=58);
 56:
                    return mike;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00026_ip = 114; continue _fun00025 }
 64:
                    report = _closure1_slot1;
                    oscar = _closure1_slot3;
                    tango = 4;
                    tango = oscar[tango];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL';
                    tango['type'] = golf;
                    tango['subscriptionTrial'] = mike;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 114:
                    return mike;
 117:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot19 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot19 = entity;
    tango = function() { // Original name: fetchGuildRoleSubscriptionGroupListing
        entity = undefined;
        tango = _closure1_slot21;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = tango;
    entity = function() { // Original name: _fetchGuildRoleSubscriptionGroupListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    StartGenerator();
                    verify = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00028_ip = 139; continue _fun00027 }
 13:
                    oscar = undefined;
                    if(!(verify === oscar)) { _fun00028_ip = 21; continue _fun00027 }
 19:
                    verify = {};
 21:
                    SaveGenerator(address=25);
 23:
                    return oscar;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00028_ip = 136; continue _fun00027 }
 31:
                    report = _closure1_slot2;
                    golf = _closure1_slot3;
                    zulu = 3;
                    zulu = golf[zulu];
                    options = report.bind(oscar)(zulu);
                    golf = options.getGuildRoleSubscriptionGroupListing;
                    report = argFoo;
                    zulu = argBar;
                    zulu = golf.bind(options)(report, zulu, verify);
                    SaveGenerator(address=77);
 75:
                    return zulu;
 77:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00028_ip = 133; continue _fun00027 }
 83:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 4;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING';
                    tango['type'] = golf;
                    tango['listing'] = zulu;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 133:
                    return zulu;
 136:
                    return mike;
 139:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot21 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _createSubscriptionListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00030_ip = 321; continue _fun00029 }
 13:
                    offset = mike.guildId;
                    verify = mike.groupListingId;
                    options = mike.data;
                    foxtrot = mike.analyticsContext;
                    oscar = mike.onBeforeDispatchNewListing;
                    golf = undefined;
                    SaveGenerator(address=47);
 45:
                    return golf;
 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00030_ip = 318; continue _fun00029 }
 56:
                    tango = _closure1_slot2;
                    yankee = _closure1_slot3;
                    zulu = 3;
                    zulu = yankee[zulu];
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.createGuildRoleSubscriptionListing;
                    zulu = zulu.bind(tango)(offset, verify, options);
                    SaveGenerator(address=96);
 94:
                    return zulu;
 96:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00030_ip = 315; continue _fun00029 }
 105:
                    options = _closure1_slot1;
                    kilo = _closure1_slot3;
                    tango = 7;
                    tango = kilo[tango];
                    romeo = options.bind(golf)(tango);
                    yankee = romeo.track;
                    tango = _closure1_slot6;
                    options = tango.ROLE_SUBSCRIPTION_LISTING_CREATED;
                    tango = {};
                    backup = zulu.id;
                    tango['role_subscription_listing_id'] = backup;
                    tango['role_subscription_group_listing_id'] = verify;
                    backup = foxtrot.templateCategory;
                    tango['template_name'] = backup;
                    foxtrot = foxtrot.hasChangeFromTemplate;
                    tango['has_change_from_template'] = foxtrot;
                    backup = _closure1_slot0;
                    foxtrot = 8;
                    foxtrot = kilo[foxtrot];
                    backup = backup.bind(golf)(foxtrot);
                    foxtrot = backup.collectGuildAnalyticsMetadata;
                    output = foxtrot.bind(backup)(offset);
                    result = tango;
                    foxtrot = copyDataProperties(result, output);
                    tango = yankee.bind(romeo)(options, tango);
                    options = _closure1_slot20;
                    tango = {};
                    yankee = true;
                    tango['includeArchivedListings'] = yankee;
                    tango = options.bind(golf)(offset, verify, tango);
                    SaveGenerator(address=245);
 243:
                    return tango;
 245:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun00030_ip = 312; continue _fun00029 }
 251:
                    options = null;
                    if(!(options != oscar)) { _fun00030_ip = 262; continue _fun00029 }
 257:
                    oscar = oscar.bind(golf)(zulu);
 262:
                    oscar = _closure1_slot1;
                    options = _closure1_slot3;
                    report = 4;
                    report = options[report];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.dispatch;
                    report = {};
                    options = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                    report['type'] = options;
                    report['listing'] = zulu;
                    report = oscar.bind(golf)(report);
                    return zulu;
 312:
                    return tango;
 315:
                    return zulu;
 318:
                    return mike;
 321:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot22 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _updateSubscriptionListing
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00032_ip = 197; continue _fun00031 }
 13:
                    options = mike.guildId;
                    offset = mike.listingId;
                    golf = mike.groupListingId;
                    verify = mike.data;
                    oscar = undefined;
                    SaveGenerator(address=41);
 39:
                    return oscar;
 41:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00032_ip = 194; continue _fun00031 }
 50:
                    report = _closure1_slot2;
                    yankee = _closure1_slot3;
                    zulu = 3;
                    zulu = yankee[zulu];
                    report = report.bind(oscar)(zulu);
                    zulu = report.updateGuildRoleSubscriptionListing;
                    sizing = report;
                    kilo = options;
                    backup = golf;
                    foxtrot = offset;
                    romeo = verify;
                    zulu = sizing[zulu](kilo, backup, foxtrot, romeo, yankee);
                    SaveGenerator(address=102);
 100:
                    return zulu;
 102:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00032_ip = 191; continue _fun00031 }
 108:
                    verify = _closure1_slot1;
                    offset = _closure1_slot3;
                    report = 4;
                    report = offset[report];
                    offset = verify.bind(oscar)(report);
                    verify = offset.dispatch;
                    report = {};
                    yankee = 'GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING';
                    report['type'] = yankee;
                    report['listing'] = zulu;
                    report = verify.bind(offset)(report);
                    report = _closure1_slot20;
                    tango = {};
                    verify = true;
                    tango['includeArchivedListings'] = verify;
                    tango = report.bind(oscar)(options, golf, tango);
                    SaveGenerator(address=179);
 177:
                    return tango;
 179:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00032_ip = 188; continue _fun00031 }
 185:
                    return zulu;
 188:
                    return tango;
 191:
                    return zulu;
 194:
                    return mike;
 197:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function() { // Original name: _fetchMonetizationRestrictions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    StartGenerator();
                    mike = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00034_ip = 486; continue _fun00033 }
 13:
                    options = argFoo;
                    tango = undefined;
                    if(!(mike === tango)) { _fun00034_ip = 24; continue _fun00033 }
 22:
                    mike = {};
 24:
                    foxtrot = mike.signal;
                    oscar = undefined;
                    backup = undefined;
                    kilo = undefined;
                    SaveGenerator(address=40);
 38:
                    return tango;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00034_ip = 483; continue _fun00033 }
 49:
                    oscar = false;
                    golf = 0;
                    backup = 0;
                    zulu = _closure1_slot7;
                    romeo = 9;
                    yankee = 1;
                    offset = 10;
                    if(!(golf < zulu)) { _fun00034_ip = 430; continue _fun00033 }
 78: // try_start_0
                    zulu = foxtrot;
                    result = null;
                    if(!(result != zulu)) { _fun00034_ip = 102; continue _fun00033 }
 87:
                    zulu = foxtrot;
                    zulu = zulu.aborted;
                    if(zulu) { _fun00034_ip = 280; continue _fun00033 }
 102:
                    golf = _closure1_slot1;
                    verify = _closure1_slot3;
                    sizing = 4;
                    zulu = verify[sizing];
                    echo = golf.bind(tango)(zulu);
                    golf = echo.dispatch;
                    zulu = {};
                    output = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS';
                    zulu['type'] = output;
                    output = options;
                    zulu['guildId'] = output;
                    zulu = golf.bind(echo)(zulu);
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = verify[zulu];
                    verify = golf.bind(tango)(zulu);
                    golf = verify.getGuildMonetizationRestrictions;
                    zulu = {};
                    echo = foxtrot;
                    zulu['signal'] = echo;
                    zulu = golf.bind(verify)(output, zulu);
                    SaveGenerator(address=193);
 191:
                    return zulu;
 193:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00034_ip = 277; continue _fun00033 }
 199:
                    output = zulu.restrictions;
                    kilo = output;
                    verify = _closure1_slot1;
                    golf = _closure1_slot3;
                    golf = golf[sizing];
                    sizing = verify.bind(tango)(golf);
                    verify = sizing.dispatch;
                    golf = {};
                    echo = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
                    golf['type'] = echo;
                    echo = options;
                    golf['guildId'] = echo;
                    if(!(result == output)) { _fun00034_ip = 257; continue _fun00033 }
 251:
                    output = new Array(0);
                    _fun00034_ip = 260; continue _fun00033;
 257:
                    output = kilo;
 260:
                    golf['restrictions'] = output;
                    golf = verify.bind(sizing)(golf);
                    oscar = true;
 272: // try_end0
                    _fun00034_ip = 430; continue _fun00033;
 277:
                    return zulu;
 280: // try_start_1
                    golf = _closure1_slot1;
                    verify = _closure1_slot3;
                    zulu = 4;
                    zulu = verify[zulu];
                    verify = golf.bind(tango)(zulu);
                    golf = verify.dispatch;
                    zulu = {};
                    sizing = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED';
                    zulu['type'] = sizing;
                    sizing = options;
                    zulu['guildId'] = sizing;
                    zulu = golf.bind(verify)(zulu);
 329: // try_end1
                    zulu = undefined;
                    return zulu;
 334: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
                    verify = _closure1_slot0;
                    zulu = _closure1_slot3;
                    golf = zulu[romeo];
                    verify = verify.bind(tango)(golf);
                    golf = verify.sleep;
                    sizing = backup;
                    sizing = sizing + yankee;
                    output = _closure1_slot1;
                    zulu = zulu[offset];
                    zulu = output.bind(tango)(zulu);
                    zulu = zulu.Millis;
                    zulu = zulu.SECOND;
                    zulu = sizing * zulu;
                    zulu = golf.bind(verify)(zulu);
                    SaveGenerator(address=404);
 402:
                    return zulu;
 404:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00034_ip = 480; continue _fun00033 }
 410:
                    golf = backup;
                    verify = golf + 1;
                    backup = verify;
                    golf = _closure1_slot7;
                    if(verify < golf) { _fun00034_ip = 78; continue _fun00033 }
 430:
                    if(oscar) { _fun00034_ip = 477; continue _fun00033 }
 433:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot3;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE';
                    report['type'] = verify;
                    report['guildId'] = options;
                    report = oscar.bind(golf)(report);
 477:
                    return tango;
 480:
                    return zulu;
 483:
                    return mike;
 486:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot24 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot6 = report;
    report = 3;
    var _closure1_slot7 = report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: fetchSubscriptionsSettings
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchSubscriptionsSettings'] = report;
    report = function() { // Original name: updateSubscriptionsSettings
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateSubscriptionsSettings'] = report;
    report = function() { // Original name: fetchAllSubscriptionListingsDataForGuild
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAllSubscriptionListingsDataForGuild'] = report;
    report = function() { // Original name: createSubscriptionGroupListing
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createSubscriptionGroupListing'] = report;
    report = function() { // Original name: updateSubscriptionGroupListing
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateSubscriptionGroupListing'] = report;
    report = function() { // Original name: deleteSubscriptionGroupListing
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteSubscriptionGroupListing'] = report;
    report = function() { // Original name: fetchSubscriptionListingForPlan
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchSubscriptionListingForPlan'] = report;
    report = function() { // Original name: deleteSubscriptionListing
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['deleteSubscriptionListing'] = report;
    report = function() { // Original name: archiveSubscriptionListing
        entity = undefined;
        tango = _closure1_slot18;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['archiveSubscriptionListing'] = report;
    report = function() { // Original name: updateSubscriptionTrial
        entity = undefined;
        tango = _closure1_slot19;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateSubscriptionTrial'] = report;
    zulu['fetchGuildRoleSubscriptionGroupListing'] = tango;
    tango = function() { // Original name: createSubscriptionListing
        entity = undefined;
        tango = _closure1_slot22;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createSubscriptionListing'] = tango;
    tango = function() { // Original name: updateSubscriptionListing
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateSubscriptionListing'] = tango;
    mike = function() { // Original name: fetchMonetizationRestrictions
        entity = undefined;
        tango = _closure1_slot24;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMonetizationRestrictions'] = mike;
    return entity;
})();