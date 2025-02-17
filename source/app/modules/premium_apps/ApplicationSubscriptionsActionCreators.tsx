// app/modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argCorge;
    var _closure1_slot1 = entity;
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
    entity = function(argFoo) { // Original name: transformSubscriptionListingToSku
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        tango = _closure1_slot5;
        tango = tango.SUBSCRIPTION;
        entity['type'] = tango;
        tango = mike.application_id;
        entity['application_id'] = tango;
        zulu = _closure1_slot4;
        zulu = zulu.APPLICATION;
        entity['product_line'] = zulu;
        zulu = mike.name;
        entity['name'] = zulu;
        zulu = '';
        entity['summary'] = zulu;
        tango = mike.description;
        entity['description'] = tango;
        tango = mike.sku_flags;
        entity['flags'] = tango;
        tango = new Array(0);
        entity['manifests'] = tango;
        tango = new Array(0);
        entity['available_regions'] = tango;
        entity['legal_notice'] = zulu;
        mike = mike.soft_deleted;
        entity['deleted'] = mike;
        mike = 0;
        entity['price_tier'] = mike;
        mike = false;
        entity['show_age_gate'] = mike;
        entity['restricted'] = mike;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: transformSubscriptionListingToStoreListing
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.id;
            entity['id'] = zulu;
            tango = _closure1_slot8;
            zulu = undefined;
            zulu = tango.bind(zulu)(mike);
            entity['sku'] = zulu;
            zulu = mike.description;
            entity['summary'] = zulu;
            zulu = mike.description;
            entity['description'] = zulu;
            zulu = mike.store_listing_benefits;
            tango = null;
            if(!(tango == zulu)) { _fun00008_ip = 70; continue _fun00007 }
 66:
            zulu = new Array(0);
 70:
            entity['benefits'] = zulu;
            zulu = mike.image_asset;
            entity['thumbnail'] = zulu;
            mike = mike.published;
            entity['published'] = mike;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: dispatchCompat
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 2;
            report = mike[oscar];
            entity = undefined;
            verify = tango.bind(entity)(report);
            options = verify.dispatch;
            report = {};
            offset = 'SKUS_FETCH_SUCCESS';
            report['type'] = offset;
            yankee = zulu.map;
            offset = _closure1_slot8;
            offset = yankee.bind(zulu)(offset);
            report['skus'] = offset;
            report = options.bind(verify)(report);
            mike = mike[oscar];
            report = tango.bind(entity)(mike);
            tango = report.dispatch;
            mike = {};
            options = 'STORE_LISTINGS_FETCH_SUCCESS';
            mike['type'] = options;
            verify = zulu.map;
            options = _closure1_slot9;
            options = verify.bind(zulu)(options);
            mike['storeListings'] = options;
            mike = tango.bind(report)(mike);
            mike = _closure1_slot6;
            report = mike.bind(entity)(zulu);
            zulu = report.bind(entity)();
            mike = zulu.done;
            tango = 'SUBSCRIPTION_PLANS_FETCH_SUCCESS';
            if(mike) { _fun00010_ip = 216; continue _fun00009 }
 142:
            offset = zulu.value;
            options = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            verify = options.bind(entity)(mike);
            options = verify.dispatch;
            mike = {};
            mike['type'] = tango;
            yankee = offset.id;
            mike['skuId'] = yankee;
            offset = offset.subscription_plans;
            mike['subscriptionPlans'] = offset;
            mike = options.bind(verify)(mike);
            options = report.bind(entity)();
            mike = options.done;
            zulu = options;
            if(!mike) { _fun00010_ip = 142; continue _fun00009 }
 216:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchAllSubscriptionListingsDataForApplication
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    foxtrot = argFoo;
                    romeo = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00012_ip = 268; continue _fun00011 }
 16:
                    oscar = foxtrot;
                    tango = romeo;
                    mike = undefined;
                    offset = undefined;
                    golf = undefined;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 2;
                    options = options[report];
                    yankee = verify.bind(mike)(options);
                    verify = yankee.dispatch;
                    options = {};
                    backup = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS';
                    options['type'] = backup;
                    options['applicationId'] = foxtrot;
                    options['groupListingId'] = romeo;
                    options = verify.bind(yankee)(options);
 82: // try_start_0
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    options = 3;
                    options = yankee[options];
                    yankee = verify.bind(mike)(options);
                    verify = yankee.getApplicationSubscriptionGroupListingsForApplication;
                    options = oscar;
                    tango = verify.bind(yankee)(options, tango);
                    SaveGenerator(address=121);
 119:
                    return tango;
 121:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun00012_ip = 217; continue _fun00011 }
 127:
                    golf = tango;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[report];
                    yankee = verify.bind(mike)(options);
                    verify = yankee.dispatch;
                    options = {};
                    romeo = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS';
                    options['type'] = romeo;
                    romeo = oscar;
                    options['applicationId'] = romeo;
                    options['groupListing'] = tango;
                    options = verify.bind(yankee)(options);
                    verify = _closure1_slot10;
                    yankee = tango.subscription_listings;
                    offset = yankee;
                    options = null;
                    if(!(options == yankee)) { _fun00012_ip = 206; continue _fun00011 }
 200:
                    options = new Array(0);
                    _fun00012_ip = 209; continue _fun00011;
 206:
                    options = offset;
 209:
                    options = verify.bind(mike)(options);
 214: // try_end0
                    return golf;
 217:
                    return tango;
 220: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE';
                    zulu['type'] = golf;
                    zulu['applicationId'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 268:
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
    entity = function() { // Original name: _fetchEntitlementsForGuild
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 213; continue _fun00013 }
 13:
                    oscar = verify;
                    golf = _closure1_slot0;
                    mike = _closure1_slot2;
                    report = 2;
                    tango = mike[report];
                    mike = undefined;
                    options = golf.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    offset = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS';
                    tango['type'] = offset;
                    tango['guildId'] = verify;
                    tango = golf.bind(options)(tango);
 67: // try_start_0
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 3;
                    tango = options[tango];
                    options = golf.bind(mike)(tango);
                    golf = options.getEntitlementsForGuild;
                    tango = oscar;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=105);
 103:
                    return tango;
 105:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun00014_ip = 162; continue _fun00013 }
 111:
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[report];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    offset = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS';
                    golf['type'] = offset;
                    offset = oscar;
                    golf['guildId'] = offset;
                    golf['entitlements'] = tango;
                    golf = options.bind(verify)(golf);
 160: // try_end0
                    _fun00014_ip = 210; continue _fun00013;
 162:
                    return tango;
 165: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE';
                    zulu['type'] = golf;
                    zulu['guildId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 210:
                    return mike;
 213:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _fetchSubscriptionListingForPlan
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    romeo = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 261; continue _fun00015 }
 15:
                    zulu = romeo;
                    var _closure4_slot0 = romeo;
                    mike = undefined;
                    golf = undefined;
                    report = undefined;
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    offset = 2;
                    options = options[offset];
                    yankee = verify.bind(mike)(options);
                    verify = yankee.dispatch;
                    options = {};
                    foxtrot = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN';
                    options['type'] = foxtrot;
                    options['planId'] = romeo;
                    options = verify.bind(yankee)(options);
 78: // try_start_0
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    options = 3;
                    options = yankee[options];
                    verify = verify.bind(mike)(options);
                    options = verify.getSubscriptionGroupForSubscriptionPlan;
                    zulu = options.bind(verify)(zulu);
                    SaveGenerator(address=113);
 111:
                    return zulu;
 113:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(options) { _fun00016_ip = 253; continue _fun00015 }
 122:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[offset];
                    offset = verify.bind(mike)(options);
                    verify = offset.dispatch;
                    options = {};
                    yankee = 'APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS';
                    options['type'] = yankee;
                    options['groupListing'] = zulu;
                    options = verify.bind(offset)(options);
                    verify = zulu.subscription_listings;
                    golf = verify;
                    options = null;
                    if(!(options == verify)) { _fun00016_ip = 187; continue _fun00015 }
 181:
                    offset = new Array(0);
                    _fun00016_ip = 190; continue _fun00015;
 187:
                    offset = golf;
 190:
                    report = offset;
                    golf = global;
                    options = golf.Promise;
                    golf = options.all;
                    verify = offset.map;
                    tango = function(argFoo) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.subscription_plans;
                            mike = 0;
                            mike = zulu[mike];
                            zulu = mike.id;
                            mike = _closure4_slot0;
                            if(!(zulu !== mike)) { _fun00018_ip = 35; continue _fun00017 }
 31:
                            mike = undefined;
                            return mike;
 35:
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 4;
                            mike = tango[mike];
                            report = undefined;
                            tango = zulu.bind(report)(mike);
                            zulu = tango.fetchSubscriptionPlansForSKU;
                            verify = entity.id;
                            oscar = true;
                            offset = tango;
                            options = undefined;
                            golf = undefined;
                            entity = offset[zulu](verify, options, golf, oscar, report);
                            return entity;
                        }
                    };
                    tango = verify.bind(offset)(tango);
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=233);
 231:
                    return tango;
 233:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun00016_ip = 250; continue _fun00015 }
 239:
                    oscar = _closure1_slot10;
                    report = oscar.bind(mike)(report);
 248: // try_end0
                    _fun00016_ip = 258; continue _fun00015;
 250:
                    return tango;
 253:
                    return zulu;
 256: // catch_target0
                    CatchBlockStart(arg_register=2);
 258:
                    return mike;
 261:
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.SKUProductLines;
    var _closure1_slot4 = golf;
    tango = tango.SKUTypes;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium_apps/ApplicationSubscriptionsActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchAllSubscriptionListingsDataForApplication
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAllSubscriptionListingsDataForApplication'] = tango;
    tango = function() { // Original name: fetchEntitlementsForGuild
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchEntitlementsForGuild'] = tango;
    tango = function(argFoo) { // Original name: dismissApplicationSubscriptionExpirationNotice
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissApplicationSubscriptionExpirationNotice'] = tango;
    mike = function() { // Original name: fetchSubscriptionListingForPlan
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchSubscriptionListingForPlan'] = mike;
    return entity;
})();