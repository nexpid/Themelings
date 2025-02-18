// app/modules/channel/getFlattedChannelList.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/getFlattedChannelList.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getFlattenedChannelList
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[2];
            michal = argBar;
            var _closure2_slot0 = michal;
            report = undefined;
            if(!(zuuluu === report)) { _fun00002_ip = 23; continue _fun00001 }
 18:
            zuuluu = function() { // Original name: l
                entity = true;
                return entity;
            };
 23:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 0;
            michal = oscard[michal];
            tangon = tangon.bind(report)(michal);
            michal = argFoo;
            tangon = tangon.bind(report)(michal);
            michal = tangon.map;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    entity = michal.channel;
                    zuuluu = entity.id;
                    entity = 'null';
                    if(!(entity !== zuuluu)) { _fun00004_ip = 56; continue _fun00003 }
 21:
                    entity = new Array(2);
                    entity[0] = michal;
                    tangon = _closure2_slot0;
                    zuuluu = michal.channel;
                    zuuluu = zuuluu.id;
                    zuuluu = tangon[zuuluu];
                    entity[1] = zuuluu;
                    _fun00004_ip = 77; continue _fun00003;
 56:
                    zuuluu = _closure2_slot0;
                    michal = michal.channel;
                    michal = michal.id;
                    entity = zuuluu[michal];
 77:
                    return entity;
                }
            };
            michal = michal.bind(tangon)(entity);
            entity = michal.flattenDeep;
            michal = entity.bind(michal)();
            entity = michal.filter;
            michal = entity.bind(michal)(zuuluu);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();