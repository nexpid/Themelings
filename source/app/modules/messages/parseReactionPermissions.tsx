// app/modules/messages/parseReactionPermissions.tsx
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
    mike = 'modules/messages/parseReactionPermissions.tsx';
    mike = tango.bind(report)(mike);
    mike = function(argFoo) { // Original name: parseReactionPermissions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            options = entity.channel;
            zulu = entity.canChat;
            golf = entity.renderReactions;
            romeo = entity.canAddNewReactions;
            mike = entity.isLurking;
            oscar = entity.isGuest;
            report = entity.communicationDisabled;
            verify = entity.isActiveChannelOrUnarchivableThread;
            tango = entity.isAutomodQuarantined;
            entity = options.isPrivate;
            yankee = entity.bind(options)();
            entity = options.isSystemDM;
            offset = entity.bind(options)();
            if(zulu) { _fun00002_ip = 82; continue _fun00001 }
 79:
            zulu = yankee;
 82:
            if(!zulu) { _fun00002_ip = 88; continue _fun00001 }
 85:
            zulu = verify;
 88:
            entity = {};
            golf = !golf;
            entity['disableReactionReads'] = golf;
            golf = mike;
            if(mike) { _fun00002_ip = 107; continue _fun00001 }
 104:
            golf = oscar;
 107:
            if(golf) { _fun00002_ip = 113; continue _fun00001 }
 110:
            golf = !zulu;
 113:
            if(golf) { _fun00002_ip = 143; continue _fun00001 }
 116:
            options = true;
            options = options === romeo;
            if(options) { _fun00002_ip = 128; continue _fun00001 }
 125:
            options = yankee;
 128:
            if(!options) { _fun00002_ip = 134; continue _fun00001 }
 131:
            options = !offset;
 134:
            if(!options) { _fun00002_ip = 140; continue _fun00001 }
 137:
            options = verify;
 140:
            golf = !options;
 143:
            entity['disableReactionCreates'] = golf;
            if(mike) { _fun00002_ip = 154; continue _fun00001 }
 151:
            mike = oscar;
 154:
            if(mike) { _fun00002_ip = 160; continue _fun00001 }
 157:
            mike = !zulu;
 160:
            if(mike) { _fun00002_ip = 169; continue _fun00001 }
 163:
            zulu = true;
            mike = zulu === report;
 169:
            if(mike) { _fun00002_ip = 178; continue _fun00001 }
 172:
            zulu = true;
            mike = zulu === tango;
 178:
            entity['disableReactionUpdates'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();