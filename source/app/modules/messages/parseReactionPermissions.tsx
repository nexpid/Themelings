// app/modules/messages/parseReactionPermissions.tsx
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
    michal = 'modules/messages/parseReactionPermissions.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: parseReactionPermissions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.channel;
            zuuluu = entity.canChat;
            golfie = entity.renderReactions;
            romeon = entity.canAddNewReactions;
            michal = entity.isLurking;
            oscard = entity.isGuest;
            report = entity.communicationDisabled;
            verify = entity.isActiveChannelOrUnarchivableThread;
            tangon = entity.isAutomodQuarantined;
            entity = option.isPrivate;
            yankee = entity.bind(option)();
            entity = option.isSystemDM;
            offset = entity.bind(option)();
            if(zuuluu) { _fun00002_ip = 82; continue _fun00001 }
 79:
            zuuluu = yankee;
 82:
            if(!zuuluu) { _fun00002_ip = 88; continue _fun00001 }
 85:
            zuuluu = verify;
 88:
            entity = {};
            golfie = !golfie;
            entity['disableReactionReads'] = golfie;
            golfie = michal;
            if(michal) { _fun00002_ip = 107; continue _fun00001 }
 104:
            golfie = oscard;
 107:
            if(golfie) { _fun00002_ip = 113; continue _fun00001 }
 110:
            golfie = !zuuluu;
 113:
            if(golfie) { _fun00002_ip = 143; continue _fun00001 }
 116:
            option = true;
            option = option === romeon;
            if(option) { _fun00002_ip = 128; continue _fun00001 }
 125:
            option = yankee;
 128:
            if(!option) { _fun00002_ip = 134; continue _fun00001 }
 131:
            option = !offset;
 134:
            if(!option) { _fun00002_ip = 140; continue _fun00001 }
 137:
            option = verify;
 140:
            golfie = !option;
 143:
            entity['disableReactionCreates'] = golfie;
            if(michal) { _fun00002_ip = 154; continue _fun00001 }
 151:
            michal = oscard;
 154:
            if(michal) { _fun00002_ip = 160; continue _fun00001 }
 157:
            michal = !zuuluu;
 160:
            if(michal) { _fun00002_ip = 169; continue _fun00001 }
 163:
            zuuluu = true;
            michal = zuuluu === report;
 169:
            if(michal) { _fun00002_ip = 178; continue _fun00001 }
 172:
            zuuluu = true;
            michal = zuuluu === tangon;
 178:
            entity['disableReactionUpdates'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();