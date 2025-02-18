// app/modules/guild_sidebar/native/ConnectedUserLimit.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/native/ConnectedUserLimit.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channel;
            michal = entity.video;
            golfie = entity.userCount;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            report = report.bind(tangon)(zuuluu);
            yankee = report.limit;
            report = zuuluu.userLimit;
            option = 0;
            report = report > option;
            offset = -1;
            if(!report) { _fun00002_ip = 83; continue _fun00001 }
 77:
            offset = zuuluu.userLimit;
 83:
            if(!michal) { _fun00002_ip = 90; continue _fun00001 }
 86:
            michal = yankee > option;
 90:
            oscard = offset;
            report = false;
            if(!michal) { _fun00002_ip = 141; continue _fun00001 }
 98:
            michal = offset < option;
            if(michal) { _fun00002_ip = 109; continue _fun00001 }
 105:
            michal = yankee < offset;
 109:
            zuuluu = yankee;
            if(!(offset > option)) { _fun00002_ip = 135; continue _fun00001 }
 116:
            option = global;
            verify = option.Math;
            option = verify.min;
            zuuluu = option.bind(verify)(offset, yankee);
 135:
            oscard = zuuluu;
            report = michal;
 141:
            zuuluu = _closure1_slot2;
            michal = _closure1_slot0;
            option = _closure1_slot1;
            entity = 3;
            entity = option[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['users'] = golfie;
            entity['total'] = oscard;
            entity['videoLimit'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ConnectedUserLimit'] = michal;
    return entity;
})();