// app/utils/ValidationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    mike = global;
    oscar = mike.Object;
    report = oscar.defineProperty;
    tango = {};
    mike = true;
    tango['value'] = mike;
    mike = '__esModule';
    mike = report.bind(oscar)(zulu, mike, tango);
    mike = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i;
    var _closure1_slot0 = mike;
    mike = /^((https:\\/\\/)?(discord\.gg\\/)|(discord\.com\\/)(invite\\/)?)?[A-Za-z0-9]{8,8}$/;
    var _closure1_slot1 = mike;
    mike = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    var _closure1_slot2 = mike;
    mike = /^(.*)#[0-9]{1,5}$/;
    var _closure1_slot3 = mike;
    mike = /^(https:\\/\\/)?(discord\.com\\/discovery\\/game\\/)([0-9-]+)\\/?/;
    var _closure1_slot4 = mike;
    mike = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'];
    var _closure1_slot5 = mike;
    mike = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'];
    var _closure1_slot6 = mike;
    mike = {};
    tango = function(argFoo) { // Original name: isEmail
        zulu = _closure1_slot0;
        mike = zulu.test;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['isEmail'] = tango;
    tango = function(argFoo) { // Original name: isInvite
        zulu = _closure1_slot1;
        mike = zulu.test;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['isInvite'] = tango;
    tango = function(argFoo) { // Original name: isPhoneNumber
        zulu = _closure1_slot2;
        mike = zulu.test;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['isPhoneNumber'] = tango;
    tango = function(argFoo) { // Original name: isUserTagLike
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot3;
            tango = report.exec;
            zulu = argFoo;
            tango = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu != tango)) { _fun00002_ip = 41; continue _fun00001 }
 29:
            report = tango.length;
            zulu = 1;
            if(!(!(report > zulu))) { _fun00002_ip = 45; continue _fun00001 }
 41:
            report = false;
            return report;
 45:
            tango = tango[zulu];
            var _closure2_slot0 = tango;
            report = _closure1_slot5;
            zulu = report.some;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = zulu.bind(report)(entity);
            zulu = _closure1_slot6;
            mike = zulu.includes;
            mike = mike.bind(zulu)(tango);
            entity = !entity;
            if(!entity) { _fun00002_ip = 98; continue _fun00001 }
 95:
            entity = !mike;
 98:
            return entity;
        }
    };
    mike['isUserTagLike'] = tango;
    entity = function(argFoo) { // Original name: isDiscoveryLink
        zulu = _closure1_slot4;
        mike = zulu.test;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['isDiscoveryLink'] = entity;
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'utils/ValidationUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();