// discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getInviteDynamicLinkTemplate
        entity = global;
        michal = entity.location;
        romeon = michal.protocol;
        michal = entity.window;
        michal = michal.GLOBAL_ENV;
        offset = michal.INVITE_HOST;
        entity = entity.HermesInternal;
        report = entity.concat;
        foxtra = '';
        yankee = '//';
        verify = '/';
        option = argFoo;
        entity = foxtra[report](romeon, yankee, offset, verify, option, golfie);
        return entity;
    };
    zuuluu['getInviteDynamicLinkTemplate'] = tangon;
    tangon = function(argFoo) { // Original name: getGuildTemplateDynamicLinkTemplate
        entity = global;
        michal = entity.location;
        romeon = michal.protocol;
        michal = entity.window;
        michal = michal.GLOBAL_ENV;
        offset = michal.GUILD_TEMPLATE_HOST;
        entity = entity.HermesInternal;
        report = entity.concat;
        foxtra = '';
        yankee = '//';
        verify = '/';
        option = argFoo;
        entity = foxtra[report](romeon, yankee, offset, verify, option, golfie);
        return entity;
    };
    zuuluu['getGuildTemplateDynamicLinkTemplate'] = tangon;
    tangon = function() { // Original name: getDefaultDynamicLinkTemplate
        entity = global;
        michal = entity.location;
        offset = michal.protocol;
        michal = entity.window;
        michal = michal.GLOBAL_ENV;
        option = michal.WEBAPP_ENDPOINT;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        yankee = '';
        verify = '//';
        golfie = '/channels/@me';
        entity = yankee[tangon](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['getDefaultDynamicLinkTemplate'] = tangon;
    michal = function(argFoo) { // Original name: getChannelDynamicLinkTemplate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            entity = global;
            michal = entity.location;
            oscard = michal.protocol;
            michal = entity.window;
            michal = michal.GLOBAL_ENV;
            report = michal.WEBAPP_ENDPOINT;
            if(golfie) { _fun00002_ip = 44; continue _fun00001 }
 38:
            golfie = '@me';
 44:
            entity = entity.HermesInternal;
            tangon = entity.concat;
            foxtra = '';
            yankee = '//';
            verify = '/channels/';
            romeon = oscard;
            offset = report;
            option = golfie;
            entity = foxtra[tangon](romeon, yankee, offset, verify, option, golfie);
            return entity;
        }
    };
    zuuluu['getChannelDynamicLinkTemplate'] = michal;
    return entity;
})();