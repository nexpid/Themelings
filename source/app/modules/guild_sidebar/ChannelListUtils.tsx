// app/modules/guild_sidebar/ChannelListUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    mike = argPlugh;
    entity = 0;
    tango = mike[entity];
    mike = argBar;
    entity = undefined;
    report = mike.bind(entity)(tango);
    tango = report.fileFinishedImporting;
    mike = 'modules/guild_sidebar/ChannelListUtils.tsx';
    mike = tango.bind(report)(mike);
    mike = function(argFoo) { // Original name: hasStream
        _fun54409: for(var _fun54409_ip = 0; ; ) switch(_fun54409_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun54409_ip = 62; continue _fun54409 }
 9:
            entity = zulu.length;
            mike = 0;
            entity = mike < entity;
            if(!entity) { _fun54409_ip = 54; continue _fun54409 }
 23:
            entity = zulu[mike];
            entity = entity.voiceState;
            entity = entity.selfStream;
            if(entity) { _fun54409_ip = 58; continue _fun54409 }
 42:
            mike = mike + 1;
            entity = zulu.length;
            if(mike < entity) { _fun54409_ip = 23; continue _fun54409 }
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
    zulu['hasStream'] = mike;
    return entity;
})();