// app/modules/teams/TeamActionCreators.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot2 = michal;
    michal = {};
    tangon = function() { // Original name: fetchTeams
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = arguments[0];
            zuuluu = undefined;
            if(!(report === zuuluu)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            report = false;
 11:
            michal = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 1;
            entity = oscard[entity];
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.get;
            entity = {};
            tangon = _closure1_slot2;
            tangon = tangon.TEAMS;
            entity['url'] = tangon;
            tangon = {};
            tangon['include_payout_account_status'] = report;
            entity['query'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['fetchTeams'] = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/teams/TeamActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();