// app/modules/polls/chat/usePollMessageContextItemTypes.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    option = 0;
    report = golfie[option];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot2 = michal;
    michal = {};
    michal['END_EARLY'] = option;
    report = 'END_EARLY';
    michal[option] = report;
    var _closure1_slot3 = michal;
    report = new Array(0);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/polls/chat/usePollMessageContextItemTypes.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: usePollMessageContextItemTypes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = report.bind(michal)(zuuluu);
            report = oscard.useStateFromStores;
            michal = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot2;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            report = report.bind(oscard)(zuuluu, michal);
            zuuluu = tangon.poll;
            michal = tangon.isPoll;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00002_ip = 169; continue _fun00001 }
 79:
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 169; continue _fun00001 }
 85:
            michal = new Array(0);
            golfie = zuuluu.expiry;
            oscard = golfie.isSameOrBefore;
            zuuluu = global;
            option = zuuluu.Date;
            zuuluu = option.now;
            zuuluu = zuuluu.bind(option)();
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = !zuuluu;
            if(!zuuluu) { _fun00002_ip = 144; continue _fun00001 }
 129:
            tangon = tangon.author;
            tangon = tangon.id;
            zuuluu = tangon === report;
 144:
            if(!zuuluu) { _fun00002_ip = 167; continue _fun00001 }
 147:
            tangon = michal.push;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.END_EARLY;
            zuuluu = tangon.bind(michal)(zuuluu);
 167:
            return michal;
 169:
            entity = _closure1_slot4;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['PollMessageContextItemTypes'] = michal;
    return entity;
})();