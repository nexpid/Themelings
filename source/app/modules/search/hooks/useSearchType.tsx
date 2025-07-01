// app/modules/search/hooks/useSearchType.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: getSearchType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = arguments[1];
            option = undefined;
            if(!(michal === option)) { _fun00002_ip = 38; continue _fun00001 }
 12:
            tangon = _closure1_slot2;
            entity = new Array(2);
            entity[0] = tangon;
            zuuluu = _closure1_slot3;
            entity[1] = zuuluu;
            michal = entity;
 38:
            zuuluu = michal;
            entity = zuuluu[Symbol.iterator];
            zuuluu = entity().next;
            tangon = zuuluu().value;
            michal = entity;
            michal = michal === option;
            report = undefined;
            if(michal) { _fun00002_ip = 63; continue _fun00001 }
 60:
            report = tangon;
 63:
            golfie = undefined;
            if(michal) { _fun00002_ip = 93; continue _fun00001 }
 68:
            tangon = zuuluu().value;
            zuuluu = entity;
            zuuluu = zuuluu === option;
            golfie = undefined;
            michal = zuuluu;
            if(zuuluu) { _fun00002_ip = 93; continue _fun00001 }
 87:
            golfie = tangon;
            michal = zuuluu;
 93:
            if(michal) { _fun00002_ip = 99; continue _fun00001 }
 96:
            entity.return();
 99:
            michal = null;
            zuuluu = michal == oscard;
            entity = null;
            if(zuuluu) { _fun00002_ip = 217; continue _fun00001 }
 110:
            tangon = _closure1_slot4;
            tangon = tangon.DMS;
            if(!(oscard !== tangon)) { _fun00002_ip = 204; continue _fun00001 }
 127:
            tangon = _closure1_slot5;
            if(!(oscard !== tangon)) { _fun00002_ip = 192; continue _fun00001 }
 135:
            tangon = golfie.getGuild;
            tangon = tangon.bind(golfie)(oscard);
            if(!(michal == tangon)) { _fun00002_ip = 180; continue _fun00001 }
 149:
            tangon = report.getChannel;
            tangon = tangon.bind(report)(oscard);
            tangon = michal != tangon;
            michal = null;
            if(!tangon) { _fun00002_ip = 178; continue _fun00001 }
 168:
            tangon = _closure1_slot4;
            michal = tangon.CHANNEL;
 178:
            _fun00002_ip = 190; continue _fun00001;
 180:
            tangon = _closure1_slot4;
            michal = tangon.GUILD;
 190:
            _fun00002_ip = 202; continue _fun00001;
 192:
            tangon = _closure1_slot4;
            michal = tangon.FAVORITES;
 202:
            _fun00002_ip = 214; continue _fun00001;
 204:
            zuuluu = _closure1_slot4;
            michal = zuuluu.DMS;
 214:
            entity = michal;
 217:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.SearchTypes;
    var _closure1_slot4 = option;
    report = report.FAVORITES;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search/hooks/useSearchType.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getSearchType'] = tangon;
    michal = function(argFoo) { // Original name: useSearchType
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            tangon = _closure1_slot6;
            zuuluu = _closure2_slot0;
            report = _closure1_slot2;
            michal = new Array(2);
            michal[0] = report;
            entity = _closure1_slot3;
            michal[1] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useSearchType'] = michal;
    return entity;
})();