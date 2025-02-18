// app/modules/instant_invite/getInviteURL.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'modules/instant_invite/getInviteURL.tsx';
    michal = tangon.bind(report)(michal);
    michal = function() { // Original name: getInviteURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = arguments[0];
            oscard = arguments[1];
            entity = undefined;
            if(!(tangon === entity)) { _fun00002_ip = 16; continue _fun00001 }
 12:
            tangon = '';
 16:
            if(!(oscard === entity)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            oscard = true;
 22:
            entity = global;
            michal = entity.window;
            michal = michal.GLOBAL_ENV;
            report = michal.INVITE_HOST;
            michal = entity.HermesInternal;
            zuuluu = michal.concat;
            michal = '/';
            tangon = zuuluu.bind(michal)(tangon);
            zuuluu = '';
            michal = zuuluu;
            if(!oscard) { _fun00002_ip = 107; continue _fun00001 }
 72:
            oscard = entity.location;
            option = oscard.protocol;
            oscard = entity.HermesInternal;
            golfie = oscard.concat;
            oscard = '//';
            michal = golfie.bind(zuuluu)(option, oscard);
 107:
            entity = entity.HermesInternal;
            entity = entity.concat;
            entity = entity.bind(zuuluu)(michal, report, tangon);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();