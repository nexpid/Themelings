// app/modules/premium/MarketingCampaignActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 168; continue _fun00001 }
 10:
                    michal = argFoo;
                    golfie = michal.campaignId;
                    zuuluu = undefined;
                    SaveGenerator(address=25);
 23:
                    return zuuluu;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 165; continue _fun00001 }
 34: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 2;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.get;
                    tangon = {};
                    verify = _closure1_slot4;
                    option = verify.MARKETING_CAMPAIGN_ELIGIBILITY;
                    golfie = option.bind(verify)(golfie);
                    tangon['url'] = golfie;
                    golfie = false;
                    tangon['rejectWithError'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=103);
 101:
                    return tangon;
 103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 123; continue _fun00001 }
 109:
                    report = tangon.body;
                    report = report.eligibility;
 120: // try_end0
                    return report;
 123:
                    return tangon;
 126: // catch_target0
                    CatchBlockStart(arg_register=5);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 3;
                    tangon = golfie[tangon];
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.captureException;
                    tangon = tangon.bind(report)(oscard);
                    return zuuluu;
 165:
                    return michal;
 168:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/MarketingCampaignActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['fetchMarketingCampaignEligibility'] = michal;
    return entity;
})();