// discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getInviteDynamicLinkTemplate
        entity = global;
        mike = entity.location;
        romeo = mike.protocol;
        mike = entity.window;
        mike = mike.GLOBAL_ENV;
        offset = mike.INVITE_HOST;
        entity = entity.HermesInternal;
        report = entity.concat;
        foxtrot = '';
        yankee = '//';
        verify = '/';
        options = argFoo;
        entity = foxtrot[report](romeo, yankee, offset, verify, options, golf);
        return entity;
    };
    zulu['getInviteDynamicLinkTemplate'] = tango;
    tango = function(argFoo) { // Original name: getGuildTemplateDynamicLinkTemplate
        entity = global;
        mike = entity.location;
        romeo = mike.protocol;
        mike = entity.window;
        mike = mike.GLOBAL_ENV;
        offset = mike.GUILD_TEMPLATE_HOST;
        entity = entity.HermesInternal;
        report = entity.concat;
        foxtrot = '';
        yankee = '//';
        verify = '/';
        options = argFoo;
        entity = foxtrot[report](romeo, yankee, offset, verify, options, golf);
        return entity;
    };
    zulu['getGuildTemplateDynamicLinkTemplate'] = tango;
    tango = function() { // Original name: getDefaultDynamicLinkTemplate
        entity = global;
        mike = entity.location;
        offset = mike.protocol;
        mike = entity.window;
        mike = mike.GLOBAL_ENV;
        options = mike.WEBAPP_ENDPOINT;
        entity = entity.HermesInternal;
        tango = entity.concat;
        yankee = '';
        verify = '//';
        golf = '/channels/@me';
        entity = yankee[tango](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['getDefaultDynamicLinkTemplate'] = tango;
    mike = function(argFoo) { // Original name: getChannelDynamicLinkTemplate
        _fun104616: for(var _fun104616_ip = 0; ; ) switch(_fun104616_ip) {
 0:
            golf = argFoo;
            entity = global;
            mike = entity.location;
            oscar = mike.protocol;
            mike = entity.window;
            mike = mike.GLOBAL_ENV;
            report = mike.WEBAPP_ENDPOINT;
            if(golf) { _fun104616_ip = 44; continue _fun104616 }
 38:
            golf = '@me';
 44:
            entity = entity.HermesInternal;
            tango = entity.concat;
            foxtrot = '';
            yankee = '//';
            verify = '/channels/';
            romeo = oscar;
            offset = report;
            options = golf;
            entity = foxtrot[tango](romeo, yankee, offset, verify, options, golf);
            return entity;
        }
    };
    zulu['getChannelDynamicLinkTemplate'] = mike;
    return entity;
})();