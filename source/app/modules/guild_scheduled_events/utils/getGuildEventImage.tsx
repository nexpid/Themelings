// app/modules/guild_scheduled_events/utils/getGuildEventImage.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/utils/getGuildEventImage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getGuildEventImageURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBar;
            michal = tangon.image;
            entity = null;
            if(!(entity != michal)) { _fun00002_ip = 298; continue _fun00001 }
 21:
            if(!(entity == oscard)) { _fun00002_ip = 83; continue _fun00001 }
 25:
            michal = global;
            michal = michal.window;
            michal = michal.screen;
            zuuluu = michal.width;
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            michal = 1;
            report = report[michal];
            michal = undefined;
            report = golfie.bind(michal)(report);
            michal = report.getDevicePixelRatio;
            michal = michal.bind(report)();
            oscard = zuuluu * michal;
 83:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            michal = 1;
            report = report[michal];
            michal = undefined;
            report = golfie.bind(michal)(report);
            michal = report.getBestMediaProxySize;
            report = michal.bind(report)(oscard);
            michal = global;
            oscard = michal.window;
            oscard = oscard.GLOBAL_ENV;
            foxtra = oscard.CDN_HOST;
            if(!(entity == foxtra)) { _fun00002_ip = 217; continue _fun00001 }
 143:
            oscard = michal.location;
            golfie = oscard.protocol;
            oscard = michal.window;
            oscard = oscard.GLOBAL_ENV;
            oscard = oscard.API_ENDPOINT;
            oscard = golfie + oscard;
            offset = _closure1_slot2;
            verify = offset.GUILD_EVENT_IMAGE;
            option = tangon.id;
            golfie = tangon.image;
            zuuluu = 'png';
            zuuluu = verify.bind(offset)(option, golfie, zuuluu);
            zuuluu = oscard + zuuluu;
            _fun00002_ip = 270; continue _fun00001;
 217:
            sizing = tangon.id;
            backup = tangon.image;
            tangon = michal.HermesInternal;
            offset = tangon.concat;
            source = '';
            update = 'https:';
            echoed = '//';
            output = '/guild-events/';
            kiloes = '/';
            result = foxtra;
            zuuluu = source[offset](update, echoed, result, output, sizing, kiloes, backup, foxtra);
 270:
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = '?size=';
            michal = tangon.bind(michal)(report);
            michal = zuuluu + michal;
            return michal;
 298:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();