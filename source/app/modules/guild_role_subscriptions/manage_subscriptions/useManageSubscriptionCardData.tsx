// app/modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SubscriptionStatusTypes;
    var _closure1_slot7 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useManageSubscriptionCardData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 8;
            entity = option[entity];
            output = undefined;
            zuuluu = michal.bind(output)(entity);
            entity = zuuluu.getRoleSubscriptionPlanId;
            entity = entity.bind(zuuluu)(verify);
            var _closure2_slot0 = entity;
            entity = 9;
            zuuluu = option[entity];
            offset = michal.bind(output)(zuuluu);
            golfie = offset.useStateFromStores;
            zuuluu = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            tangon = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getSubscriptionListingForPlan;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = golfie.bind(offset)(oscard, tangon);
            var _closure2_slot1 = tangon;
            oscard = option[entity];
            offset = michal.bind(output)(oscard);
            golfie = offset.useStateFromStores;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00004_ip = 43; continue _fun00003 }
 16:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.getSubscriptionGroupListingForSubscriptionListing;
                    michal = _closure2_slot1;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            zuuluu = golfie.bind(offset)(oscard, zuuluu);
            var _closure2_slot2 = zuuluu;
            entity = option[entity];
            offset = michal.bind(output)(entity);
            golfie = offset.useStateFromStores;
            entity = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getGuild;
                    report = _closure2_slot2;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00006_ip = 39; continue _fun00005 }
 30:
                    tangon = _closure2_slot2;
                    entity = tangon.guild_id;
 39:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            golfie = golfie.bind(offset)(oscard, entity);
            var _closure2_slot3 = golfie;
            offset = _closure1_slot4;
            oscard = offset.useState;
            entity = false;
            yankee = oscard.bind(offset)(entity);
            oscard = _closure1_slot3;
            entity = 2;
            yankee = oscard.bind(output)(yankee, entity);
            entity = 0;
            oscard = yankee[entity];
            var _closure2_slot4 = oscard;
            entity = 1;
            entity = yankee[entity];
            var _closure2_slot5 = entity;
            entity = 10;
            entity = option[entity];
            michal = michal.bind(output)(entity);
            entity = michal.useFetchSubscriptionsSettings;
            entity = entity.bind(michal)();
            entity = entity.fetchSubscriptionsSettings;
            var _closure2_slot6 = entity;
            option = offset.useEffect;
            michal = new Array(3);
            michal[0] = oscard;
            michal[1] = golfie;
            michal[2] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot4;
                    if(!michal) { _fun00008_ip = 20; continue _fun00007 }
 10:
                    tangon = _closure2_slot3;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 20:
                    if(!michal) { _fun00008_ip = 56; continue _fun00007 }
 23:
                    report = _closure1_slot6;
                    tangon = report.getSubscriptionSettings;
                    zuuluu = _closure2_slot3;
                    zuuluu = zuuluu.id;
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = null;
                    michal = zuuluu == tangon;
 56:
                    if(!michal) { _fun00008_ip = 79; continue _fun00007 }
 59:
                    zuuluu = _closure2_slot6;
                    entity = _closure2_slot3;
                    michal = entity.id;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            entity = option.bind(offset)(entity, michal);
            option = null;
            entity = option == tangon;
            michal = undefined;
            if(entity) { _fun00002_ip = 621; continue _fun00001 }
 303:
            entity = {};
            entity['subscription'] = verify;
            entity = entity.subscription;
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            kiloes = 5;
            verify = verify[kiloes];
            offset = offset.bind(output)(verify);
            verify = entity.currentPeriodEnd;
            offset = offset.bind(output)(verify);
            verify = offset.format;
            yankee = 'M/D/YY';
            backup = verify.bind(offset)(yankee);
            verify = entity.price;
            verify = option != verify;
            romeon = '';
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
            romeon = sizing.bind(result)(offset, verify);
 424:
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[kiloes];
            offset = offset.bind(output)(verify);
            verify = entity.createdAt;
            offset = offset.bind(output)(verify);
            verify = offset.format;
            kiloes = verify.bind(offset)(yankee);
            yankee = entity.status;
            verify = _closure1_slot7;
            offset = verify.CANCELED;
            yankee = yankee === offset;
            offset = entity.status;
            verify = verify.PAST_DUE;
            entity = entity.trialId;
            option = option != entity;
            entity = {};
            entity['memberSince'] = kiloes;
            entity['nextRenewalDate'] = backup;
            backup = _closure1_slot0;
            result = _closure1_slot2;
            foxtra = 7;
            kiloes = result[foxtra];
            kiloes = backup.bind(output)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            foxtra = result[foxtra];
            foxtra = backup.bind(output)(foxtra);
            backup = foxtra.t;
            if(yankee) { _fun00002_ip = 576; continue _fun00001 }
 561:
            foxtra = backup.CVjLcH;
            foxtra = kiloes.bind(sizing)(foxtra);
            _fun00002_ip = 589; continue _fun00001;
 576:
            backup = backup.UAfot7;
            foxtra = kiloes.bind(sizing)(backup);
 589:
            entity['nextRenewalLabel'] = foxtra;
            entity['subscriptionPrice'] = romeon;
            entity['isCancelled'] = yankee;
            verify = offset === verify;
            entity['isPastDue'] = verify;
            entity['isTrial'] = option;
            michal = entity;
 621:
            entity = {};
            entity['guild'] = golfie;
            entity['expanded'] = oscard;
            report = function() { // Original name: handleToggleExpanded
                zuuluu = _closure2_slot5;
                michal = undefined;
                entity = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity['handleToggleExpanded'] = report;
            entity['listing'] = tangon;
            entity['groupListing'] = zuuluu;
            entity['subscriptionInfo'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();