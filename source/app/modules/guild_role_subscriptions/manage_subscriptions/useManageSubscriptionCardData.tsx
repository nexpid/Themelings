// app/modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SubscriptionStatusTypes;
    var _closure1_slot7 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useManageSubscriptionCardData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 8;
            entity = options[entity];
            output = undefined;
            zulu = mike.bind(output)(entity);
            entity = zulu.getRoleSubscriptionPlanId;
            entity = entity.bind(zulu)(verify);
            var _closure2_slot0 = entity;
            entity = 9;
            zulu = options[entity];
            offset = mike.bind(output)(zulu);
            golf = offset.useStateFromStores;
            zulu = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = zulu;
            tango = function() {
                zulu = _closure1_slot6;
                mike = zulu.getSubscriptionListingForPlan;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = golf.bind(offset)(oscar, tango);
            var _closure2_slot1 = tango;
            oscar = options[entity];
            offset = mike.bind(output)(oscar);
            golf = offset.useStateFromStores;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00004_ip = 43; continue _fun00003 }
 16:
                    tango = _closure1_slot6;
                    zulu = tango.getSubscriptionGroupListingForSubscriptionListing;
                    mike = _closure2_slot1;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 43:
                    return entity;
                }
            };
            zulu = golf.bind(offset)(oscar, zulu);
            var _closure2_slot2 = zulu;
            entity = options[entity];
            offset = mike.bind(output)(entity);
            golf = offset.useStateFromStores;
            entity = _closure1_slot5;
            oscar = new Array(1);
            oscar[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getGuild;
                    report = _closure2_slot2;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00006_ip = 39; continue _fun00005 }
 30:
                    tango = _closure2_slot2;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            golf = golf.bind(offset)(oscar, entity);
            var _closure2_slot3 = golf;
            offset = _closure1_slot4;
            oscar = offset.useState;
            entity = false;
            yankee = oscar.bind(offset)(entity);
            oscar = _closure1_slot3;
            entity = 2;
            yankee = oscar.bind(output)(yankee, entity);
            entity = 0;
            oscar = yankee[entity];
            var _closure2_slot4 = oscar;
            entity = 1;
            entity = yankee[entity];
            var _closure2_slot5 = entity;
            entity = 10;
            entity = options[entity];
            mike = mike.bind(output)(entity);
            entity = mike.useFetchSubscriptionsSettings;
            entity = entity.bind(mike)();
            entity = entity.fetchSubscriptionsSettings;
            var _closure2_slot6 = entity;
            options = offset.useEffect;
            mike = new Array(3);
            mike[0] = oscar;
            mike[1] = golf;
            mike[2] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot4;
                    if(!mike) { _fun00008_ip = 20; continue _fun00007 }
 10:
                    tango = _closure2_slot3;
                    zulu = null;
                    mike = zulu != tango;
 20:
                    if(!mike) { _fun00008_ip = 56; continue _fun00007 }
 23:
                    report = _closure1_slot6;
                    tango = report.getSubscriptionSettings;
                    zulu = _closure2_slot3;
                    zulu = zulu.id;
                    tango = tango.bind(report)(zulu);
                    zulu = null;
                    mike = zulu == tango;
 56:
                    if(!mike) { _fun00008_ip = 79; continue _fun00007 }
 59:
                    zulu = _closure2_slot6;
                    entity = _closure2_slot3;
                    mike = entity.id;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            entity = options.bind(offset)(entity, mike);
            options = null;
            entity = options == tango;
            mike = undefined;
            if(entity) { _fun00002_ip = 617; continue _fun00001 }
 303:
            entity = {};
            entity['subscription'] = verify;
            entity = entity.subscription;
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            kilo = 5;
            verify = verify[kilo];
            offset = offset.bind(output)(verify);
            verify = entity.currentPeriodEnd;
            offset = offset.bind(output)(verify);
            verify = offset.format;
            yankee = 'M/D/YY';
            backup = verify.bind(offset)(yankee);
            verify = entity.price;
            verify = options != verify;
            romeo = '';
            if(!verify) { _fun00002_ip = 424; continue _fun00001 }
 380:
            offset = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 6;
            verify = sizing[verify];
            result = offset.bind(output)(verify);
            sizing = result.formatPrice;
            offset = entity.price;
            verify = entity.currency;
            romeo = sizing.bind(result)(offset, verify);
 424:
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[kilo];
            offset = offset.bind(output)(verify);
            verify = entity.createdAt;
            offset = offset.bind(output)(verify);
            verify = offset.format;
            kilo = verify.bind(offset)(yankee);
            yankee = entity.status;
            verify = _closure1_slot7;
            offset = verify.CANCELED;
            yankee = yankee === offset;
            offset = entity.status;
            verify = verify.PAST_DUE;
            entity = entity.trialId;
            options = options != entity;
            entity = {};
            entity['memberSince'] = kilo;
            entity['nextRenewalDate'] = backup;
            backup = _closure1_slot0;
            result = _closure1_slot2;
            foxtrot = 7;
            kilo = result[foxtrot];
            kilo = backup.bind(output)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            foxtrot = result[foxtrot];
            foxtrot = backup.bind(output)(foxtrot);
            backup = foxtrot.t;
            if(yankee) { _fun00002_ip = 574; continue _fun00001 }
 561:
            foxtrot = backup.CVjLcH;
            foxtrot = kilo.bind(sizing)(foxtrot);
            _fun00002_ip = 585; continue _fun00001;
 574:
            backup = backup.UAfot7;
            foxtrot = kilo.bind(sizing)(backup);
 585:
            entity['nextRenewalLabel'] = foxtrot;
            entity['subscriptionPrice'] = romeo;
            entity['isCancelled'] = yankee;
            verify = offset === verify;
            entity['isPastDue'] = verify;
            entity['isTrial'] = options;
            mike = entity;
 617:
            entity = {};
            entity['guild'] = golf;
            entity['expanded'] = oscar;
            report = function() { // Original name: handleToggleExpanded
                zulu = _closure2_slot5;
                mike = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity['handleToggleExpanded'] = report;
            entity['listing'] = tango;
            entity['groupListing'] = zulu;
            entity['subscriptionInfo'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();