// app/utils/ValidationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    michal = global;
    oscard = michal.Object;
    report = oscard.defineProperty;
    tangon = {};
    michal = true;
    tangon['value'] = michal;
    michal = '__esModule';
    michal = report.bind(oscard)(zuuluu, michal, tangon);
    michal = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
    var _closure1_slot0 = michal;
    michal = /^((https:\\/\\/)?(discord\.gg\\/)|(discord\.com\\/)(invite\\/)?)?[A-Za-z0-9]{8,8}$/;
    var _closure1_slot1 = michal;
    michal = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    var _closure1_slot2 = michal;
    michal = /^(.*)#[0-9]{1,5}$/;
    var _closure1_slot3 = michal;
    michal = /^(https:\\/\\/)?(discord\.com\\/discovery\\/game\\/)([0-9-]+)\\/?/;
    var _closure1_slot4 = michal;
    michal = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'];
    var _closure1_slot5 = michal;
    michal = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'];
    var _closure1_slot6 = michal;
    michal = {};
    tangon = function(argFoo) { // Original name: isEmail
        zuuluu = _closure1_slot0;
        michal = zuuluu.test;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['isEmail'] = tangon;
    tangon = function(argFoo) { // Original name: isInvite
        zuuluu = _closure1_slot1;
        michal = zuuluu.test;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['isInvite'] = tangon;
    tangon = function(argFoo) { // Original name: isPhoneNumber
        zuuluu = _closure1_slot2;
        michal = zuuluu.test;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['isPhoneNumber'] = tangon;
    tangon = function(argFoo) { // Original name: isUserTagLike
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot3;
            tangon = report.exec;
            zuuluu = argFoo;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 41; continue _fun00001 }
 29:
            report = tangon.length;
            zuuluu = 1;
            if(!(!(report > zuuluu))) { _fun00002_ip = 45; continue _fun00001 }
 41:
            report = false;
            return report;
 45:
            tangon = tangon[zuuluu];
            var _closure2_slot0 = tangon;
            report = _closure1_slot5;
            zuuluu = report.some;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = zuuluu.bind(report)(entity);
            zuuluu = _closure1_slot6;
            michal = zuuluu.includes;
            michal = michal.bind(zuuluu)(tangon);
            entity = !entity;
            if(!entity) { _fun00002_ip = 96; continue _fun00001 }
 93:
            entity = !michal;
 96:
            return entity;
        }
    };
    michal['isUserTagLike'] = tangon;
    entity = function(argFoo) { // Original name: isDiscoveryLink
        zuuluu = _closure1_slot4;
        michal = zuuluu.test;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['isDiscoveryLink'] = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/ValidationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();