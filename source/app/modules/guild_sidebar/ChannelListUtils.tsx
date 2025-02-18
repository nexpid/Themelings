// app/modules/guild_sidebar/ChannelListUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    michal = 'modules/guild_sidebar/ChannelListUtils.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: hasStream
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 62; continue _fun00001 }
 9:
            entity = zuuluu.length;
            michal = 0;
            entity = michal < entity;
            if(!entity) { _fun00002_ip = 54; continue _fun00001 }
 23:
            entity = zuuluu[michal];
            entity = entity.voiceState;
            entity = entity.selfStream;
            if(entity) { _fun00002_ip = 58; continue _fun00001 }
 42:
            michal = michal + 1;
            entity = zuuluu.length;
            if(michal < entity) { _fun00002_ip = 23; continue _fun00001 }
 54:
            entity = false;
            return entity;
 58:
            entity = true;
            return entity;
 62:
            entity = false;
            return entity;
        }
    };
    zuuluu['hasStream'] = michal;
    return entity;
})();