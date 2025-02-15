// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SafetyWarningTypes;
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun102154: for(var _fun102154_ip = 0; ; ) switch(_fun102154_ip) {
 0:
            golf = argFoo;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 2;
            entity = oscar[entity];
            tango = undefined;
            options = report.bind(tango)(entity);
            mike = options.useIsEligibleForInappropriateConversationWarning;
            entity = {};
            verify = 'context-menu-item';
            entity['location'] = verify;
            mike = mike.bind(options)(entity);
            entity = 3;
            entity = oscar[entity];
            yankee = report.bind(tango)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot2;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                mike = _closure1_slot2;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            options = offset.bind(yankee)(options, entity);
            entity = 4;
            entity = oscar[entity];
            oscar = report.bind(tango)(entity);
            report = oscar.useInappropriateConversationBannerForChannel;
            entity = golf.id;
            report = report.bind(oscar)(entity, verify);
            oscar = null;
            entity = oscar == options;
            verify = undefined;
            if(entity) { _fun102154_ip = 145; continue _fun102154 }
 135:
            entity = options.isStaff;
            verify = entity.bind(options)();
 145:
            options = true;
            entity = null;
            if(!(options === verify)) { _fun102154_ip = 244; continue _fun102154 }
 153:
            entity = null;
            if(!mike) { _fun102154_ip = 244; continue _fun102154 }
 158:
            mike = golf.isDM;
            mike = mike.bind(golf)();
            entity = null;
            if(!mike) { _fun102154_ip = 244; continue _fun102154 }
 173:
            mike = {};
            golf = oscar == report;
            options = undefined;
            if(golf) { _fun102154_ip = 189; continue _fun102154 }
 184:
            options = report.type;
 189:
            golf = _closure1_slot3;
            golf = golf.INAPPROPRIATE_CONVERSATION_TIER_1;
            golf = options === golf;
            mike['isTier1'] = golf;
            oscar = oscar == report;
            tango = undefined;
            if(oscar) { _fun102154_ip = 222; continue _fun102154 }
 217:
            tango = report.type;
 222:
            zulu = _closure1_slot3;
            zulu = zulu.INAPPROPRIATE_CONVERSATION_TIER_2;
            zulu = tango === zulu;
            mike['isTier2'] = zulu;
            entity = mike;
 244:
            return entity;
        }
    };
    zulu['useInappropriateConversationsTiers'] = mike;
    return entity;
})();