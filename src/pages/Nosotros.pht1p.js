// Referencia de la API de Velo: https://www.wix.com/velo/reference/api-overview/introduction
$w.onReady(function () {
    // Oculta los contenedores al cargar la página
    $w("#boxContainer").show();
    $w("#titlMision").hide();// Cierra el contenedor opuesto
    $w("#DescMision").hide();// Cierra el contenedor opuesto
    $w("#TitlVision").hide();// Cierra el contenedor opuesto
    $w("#DescVision").hide();// Cierra el contenedor opuesto
    $w("#TitlCompromisos").hide();// Cierra el contenedor opuesto
    $w("#groupCompromisos").hide();// Cierra el contenedor opuesto
    $w("#TitlCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#galleryCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#TitlPoliticas").hide();// Cierra el contenedor opuesto
    $w("#GropuPoliticas").hide();// Cierra el contenedor opuesto


    $w("#btnMision").onClick(() => {
        if ($w("#titlMision").hidden) {
            $w("#titlMision").show();
            $w("#DescMision").show();

    $w("#TitlVision").hide();// Cierra el contenedor opuesto
    $w("#DescVision").hide();// Cierra el contenedor opuesto
    $w("#TitlCompromisos").hide();// Cierra el contenedor opuesto
    $w("#groupCompromisos").hide();// Cierra el contenedor opuesto
    $w("#TitlCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#galleryCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#TitlPoliticas").hide();// Cierra el contenedor opuesto
    $w("#GropuPoliticas").hide();// Cierra el contenedor opuesto
        } else {
            $w("#titlMision").hide();
        }
    });

    $w("#btnVision").onClick(() => {
        if ($w("#TitlVision").hidden) {
            $w("#TitlVision").show();
            $w("#DescVision").show();

    $w("#titlMision").hide();// Cierra el contenedor opuesto
    $w("#DescMision").hide();// Cierra el contenedor opuesto
    $w("#TitlCompromisos").hide();// Cierra el contenedor opuesto
    $w("#groupCompromisos").hide();// Cierra el contenedor opuesto
    $w("#TitlCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#galleryCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#TitlPoliticas").hide();// Cierra el contenedor opuesto
    $w("#GropuPoliticas").hide();// Cierra el contenedor opuesto

        } else {
            $w("#contVision").hide();
        }
    });

        $w("#btnCompromisos").onClick(() => {
        if ($w("#TitlCompromisos").hidden) {
            $w("#TitlCompromisos").show();
            $w("#groupCompromisos").show();

    $w("#titlMision").hide();// Cierra el contenedor opuesto
    $w("#DescMision").hide();// Cierra el contenedor opuesto
    $w("#TitlVision").hide();// Cierra el contenedor opuesto
    $w("#DescVision").hide();// Cierra el contenedor opuesto
    $w("#TitlCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#galleryCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#TitlPoliticas").hide();// Cierra el contenedor opuesto
    $w("#GropuPoliticas").hide();// Cierra el contenedor opuesto

        } else {
            $w("#TitlCompromisos").hide();
        }
    });
    
        $w("#btnCertificaciones").onClick(() => {
        if ($w("#TitlCertificaciones").hidden) {
            $w("#TitlCertificaciones").show();
            $w("#galleryCertificaciones").show();


    $w("#titlMision").hide();// Cierra el contenedor opuesto
    $w("#DescMision").hide();// Cierra el contenedor opuesto
    $w("#TitlVision").hide();// Cierra el contenedor opuesto
    $w("#DescVision").hide();// Cierra el contenedor opuesto
    $w("#TitlCompromisos").hide();// Cierra el contenedor opuesto
    $w("#groupCompromisos").hide();// Cierra el contenedor opuesto
    $w("#TitlPoliticas").hide();// Cierra el contenedor opuesto
    $w("#GropuPoliticas").hide();// Cierra el contenedor opuesto

        } else {
            $w("#contCertificaciones").hide();
        }
    });

            $w("#btnPoliticas").onClick(() => {
        if ($w("#TitlPoliticas").hidden) {
            $w("#TitlPoliticas").show();
            $w("#GropuPoliticas").show();

    $w("#titlMision").hide();// Cierra el contenedor opuesto
    $w("#DescMision").hide();// Cierra el contenedor opuesto
    $w("#TitlVision").hide();// Cierra el contenedor opuesto
    $w("#DescVision").hide();// Cierra el contenedor opuesto
    $w("#TitlCompromisos").hide();// Cierra el contenedor opuesto
    $w("#groupCompromisos").hide();// Cierra el contenedor opuesto
    $w("#TitlCertificaciones").hide();// Cierra el contenedor opuesto
    $w("#galleryCertificaciones").hide();// Cierra el contenedor opuesto

        } else {
            $w("#TitlPoliticas").hide();
        }
    });
});
// ═══════════════════════════════════════════════════════════════
// VELO — masterPage.js (página de inicio)
// ═══════════════════════════════════════════════════════════════

import wixData    from 'wix-data';
import wixWindow  from 'wix-window';
import { enviarCorreo } from 'backend/sendEmail.web';

const ID_SERVICIOS        = '#html25';   // Carrusel de servicios
const ID_PROYECTOS        = '#html20';   // Galería de proyectos
const ID_CONTACTO         = '#html22';   // Formulario
const ID_SCROLL           = '#html19';   // Scroll overlay
const ID_MAPA_PROYECTOS   = '#html2';    // Mapa nacional de proyectos
const ID_ALIADOS          = '#html1';   // Carrusel de aliados

const COL_SERVICIOS = 'Servicios';
const COL_PROYECTOS = 'Proyectos';
const COL_CONTACTOS = 'ContactosWeb';
const COL_ALIADOS   = 'logos';           // Colección "logos"

// ═══════════════════════════════════════════════════════════════
//  FUNCIÓN AUXILIAR: obtener el origen correcto
// ═══════════════════════════════════════════════════════════════
function obtenerOrigin() {
    try {
        const { location } = wixWindow;
        const host = location.hostname;
        if (host && !host.includes('filesusr') && !host.includes('editorx') && !host.includes('wixsite.com')) {
            return location.origin;
        }
    } catch (e) {}
    return 'https://www.eiatec.com';
}

$w.onReady(function () {
    console.log('🚀 EIATEC Velo iniciado');
    iniciarScrollOverlay();
    iniciarCarruselServicios();
    iniciarGaleriaProyectos();
    iniciarFormularioContacto();
    iniciarMapaProyectos();
    iniciarAliados();
});

// ─────────────────────────────────────────────
// SCROLL OVERLAY
// ─────────────────────────────────────────────
function iniciarScrollOverlay() {
    try {
        const htmlScroll = $w(ID_SCROLL);
        if (!htmlScroll) return;

        wixWindow.getBoundingRect().then(info => {
            htmlScroll.width  = info.window.width;
            htmlScroll.height = info.window.height;
        });

        htmlScroll.onMessage(event => {
            if (event.data?.type === 'EIATEC_SCROLL_END') {
                console.log('📜 Scroll overlay liberado');
                htmlScroll.collapse();
            }
        });
    } catch (e) {
        console.warn('⚠️ ScrollOverlay no disponible:', e.message);
    }
}

// ─────────────────────────────────────────────
// SERVICIOS (carrusel)
// ─────────────────────────────────────────────
function iniciarCarruselServicios() {
    const htmlElement = $w(ID_SERVICIOS);
    if (!htmlElement) {
        console.warn(`⚠️ No se encontró ${ID_SERVICIOS}`);
        return;
    }

    let dataAlreadySent = false;
    htmlElement.onMessage(async event => {
        if (event.data === 'READY' && !dataAlreadySent) {
            dataAlreadySent = true;
            console.log(`✅ ${ID_SERVICIOS} listo → cargando Servicios`);
            await enviarServicios(htmlElement);
        }
    });
}

async function enviarServicios(htmlElement) {
    try {
        const result = await wixData.query(COL_SERVICIOS)
            .limit(50)
            .find();

        const origin = obtenerOrigin();

        const payload = result.items.map(item => {
            const slug = item.slug || item.link || '';
            const link = slug ? `${origin}/servicios-2/${slug}` : '#';

            return {
                title:           item.title || item.titulo || item.nombre || 'Servicio',
                tag:             item.tag || '',
                categoria:       item.categoria || item.category || item.categora || '',
                descripcion:     item.descripcion || item.desc || item.enunciado || item.alcance || '',
                video:           item.video || item.videoUrl || item.media || '',
                imagenPrincipal: extraerUrl(item.imagenPrincipal || item.imagen || item.image || item.thumbnail),
                varianteImagen:  extraerUrl(item.varianteImagen || item.icono),
                cliente:         item.cliente || item.client || '',
                fecha:           item.fecha ? obtenerAño(item.fecha) : '',
                link
            };
        });

        htmlElement.postMessage({ type: 'SERVICIOS', payload });
        console.log(`📤 ${payload.length} servicios enviados`);

    } catch (err) {
        console.error('❌ Error cargando Servicios:', err.message);
        htmlElement.postMessage({ type: 'ERROR', message: err.message });
    }
}

// ─────────────────────────────────────────────
// GALERÍA DE PROYECTOS (HTML #20)
// ─────────────────────────────────────────────
function iniciarGaleriaProyectos() {
    const htmlElement = $w(ID_PROYECTOS);
    if (!htmlElement) {
        console.warn(`⚠️ No se encontró ${ID_PROYECTOS}`);
        return;
    }

    let dataAlreadySent = false;
    htmlElement.onMessage(async event => {
        if (event.data === 'READY' && !dataAlreadySent) {
            dataAlreadySent = true;
            console.log(`✅ ${ID_PROYECTOS} listo → cargando Proyectos`);
            await enviarProyectos(htmlElement);
        }
    });
}

async function enviarProyectos(htmlElement) {
    try {
        const result = await wixData.query(COL_PROYECTOS)
            .limit(50)
            .find();

        const origin = obtenerOrigin();

        const payload = result.items.map(item => {
            const slug = item.slug || item.link || '';
            const link = slug ? `${origin}/proyectos-1/${slug}` : '#';

            return {
                title:           item.title || item.titulo || 'Proyecto',
                tag:             item.tag || '',
                categoria:       item.categoria || item.categora || item.category || '',
                descripcion:     item.descripcion || item.anunciado || item.desc || '',
                imagenPrincipal: extraerUrl(item.imagenPrincipal || item.imagen || item.image),
                video:           item.video || item.videoUrl || '',
                varianteImagen:  extraerUrl(item.varianteImagen || item.icono),
                cliente:         item.cliente || item.client || '',
                fecha:           item.fecha ? obtenerAño(item.fecha) : '',
                link
            };
        });

        htmlElement.postMessage({ type: 'PROYECTOS', payload });
        console.log(`📤 ${payload.length} proyectos enviados`);

    } catch (err) {
        console.error('❌ Error cargando Proyectos:', err.message);
        htmlElement.postMessage({ type: 'ERROR', message: err.message });
    }
}

// ─────────────────────────────────────────────
// MAPA DE PROYECTOS (HTML #29)
// ─────────────────────────────────────────────
function iniciarMapaProyectos() {
    const htmlMapa = $w(ID_MAPA_PROYECTOS);
    if (!htmlMapa) {
        console.warn(`⚠️ No se encontró ${ID_MAPA_PROYECTOS}`);
        return;
    }

    let dataAlreadySent = false;
    htmlMapa.onMessage(async event => {
        if (event.data === 'READY' && !dataAlreadySent) {
            dataAlreadySent = true;
            console.log(`✅ ${ID_MAPA_PROYECTOS} listo → cargando Proyectos al mapa`);
            await enviarDatosMapaProyectos(htmlMapa);
        }
    });
}

async function enviarDatosMapaProyectos(htmlElement) {
    try {
        const result = await wixData.query(COL_PROYECTOS)
            .limit(50)
            .find();

        const origin = obtenerOrigin();

        const payload = result.items.map(item => {
            const slug = item.slug || item.link || '';
            const link = slug ? `${origin}/proyectos-1/${slug}` : '#';
            const categoria = item.categoria || item['Categoría'] || item.category || 'General';

            return {
                id:             item._id,
                title:          item.title || item.titulo || item.proyecto || 'Proyecto',
                tag:            item.ubicacion || item['Ubicación'] || item.tag || 'Sin ubicación',
                categoria:      categoria,
                anunciado:      item.anunciado || item['Anunciado'] || '',
                descripcion:    item.descripcion || item.alcance || '',
                cliente:        item.cliente || item['Cliente:'] || '',
                imagenPrincipal: extraerUrl(item.imagenPrincipal || item['Imagen Principal'] || item.imagen || ''),
                video:          item.video || item['Video'] || '',
                fecha:          item.fecha || item['Fecha:'] || '',
                tags:           [categoria],
                slug:           slug,
                coordenadas:    item.coordenadas || '',
                link
            };
        });

        htmlElement.postMessage({ type: 'PROYECTOS', payload });
        console.log(`📤 ${payload.length} proyectos enviados al mapa`);

    } catch (err) {
        console.error('❌ Error cargando proyectos para el mapa:', err.message);
        htmlElement.postMessage({ type: 'ERROR', message: err.message });
    }
}

// ─────────────────────────────────────────────
// FORMULARIO
// ─────────────────────────────────────────────
function iniciarFormularioContacto() {
    const htmlContacto = $w(ID_CONTACTO);
    if (!htmlContacto) {
        console.warn(`⚠️ No se encontró ${ID_CONTACTO}`);
        return;
    }

    htmlContacto.onMessage(async event => {
        let data;
        try {
            data = typeof event.data === 'string'
                ? JSON.parse(event.data)
                : event.data;
        } catch {
            return;
        }

        if (!data || data.type !== 'FORMULARIO' || !data.payload) return;

        const { nombre, apellido, email, departamento, nombreDepartamento, mensaje } = data.payload;
        console.log('📬 Formulario recibido:', email);

        try {
            await wixData.insert(COL_CONTACTOS, {
                nombre,
                apellido,
                email,
                departamento,
                nombreDepartamento,
                mensaje,
                fecha: new Date(),
                estado: 'pendiente'
            });

            console.log('✅ Guardado en CMS');
            enviarCorreo(data.payload).catch(e => console.warn('⚠️ Correo no enviado:', e.message));
            htmlContacto.postMessage({ type: 'FORMULARIO_OK' });

        } catch (err) {
            console.error('❌ Error guardando:', err.message);
            htmlContacto.postMessage({ type: 'FORMULARIO_ERROR', message: err.message });
        }
    });
}

// ─────────────────────────────────────────────
// ALIADOS (CARRUSEL) – COLECCIÓN "logos"
// ─────────────────────────────────────────────
function iniciarAliados() {
    const htmlElement = $w(ID_ALIADOS);
    if (!htmlElement) {
        console.warn(`⚠️ No se encontró ${ID_ALIADOS}`);
        return;
    }

    let dataAlreadySent = false;
    htmlElement.onMessage(async event => {
        if (event.data === 'READY' && !dataAlreadySent) {
            dataAlreadySent = true;
            console.log(`✅ ${ID_ALIADOS} listo → cargando Aliados`);
            await enviarAliados(htmlElement);
        }
    });
}

async function enviarAliados(htmlElement) {
    try {
        // Solo hay 1 item en la colección
        const result = await wixData.query(COL_ALIADOS)
            .limit(1)
            .find();

        if (result.items.length === 0) {
            console.warn('⚠️ Colección vacía');
            htmlElement.postMessage({ type: 'ALIADOS', payload: [] });
            return;
        }

        const item = result.items[0];

        // Obtener galería (soporta varios nombres de campo)
        const rawGallery =
            item.mediagallery ||
            item.logo ||
            item.image ||
            item.media ||
            [];

        // Normalizar a array
        const galleryArray = Array.isArray(rawGallery) ? rawGallery : [rawGallery];

        // Convertir cada imagen a URL pública
        const payload = galleryArray
            .map(img => extractWixImageUrl(img))
            .filter(Boolean)               // descarta vacíos
            .map(url => ({ imagen: url }));

        console.log('📤 Aliados procesados:', payload);
        htmlElement.postMessage({ type: 'ALIADOS', payload });

    } catch (err) {
        console.error('❌ Error cargando Aliados:', err.message);
        htmlElement.postMessage({ type: 'ERROR', message: err.message });
    }
}

// ── NUEVA FUNCIÓN DE EXTRACCIÓN SEGURA ──
function extractWixImageUrl(raw) {
    if (!raw) return '';

    // Caso string directo
    if (typeof raw === 'string') {
        if (raw.startsWith('http')) return raw;
        // Extraer del formato wix:image://v1/...
        const match = raw.match(/wix:image:\/\/v1\/([^\/#]+)/);
        if (match) return `https://static.wixstatic.com/media/${match[1]}`;
        return raw; // devolver lo que haya
    }

    // Caso objeto Wix Media (src, url, etc.)
    if (typeof raw === 'object') {
        return raw.url || raw.src || raw.fileUrl || raw.imageUrl || '';
    }

    return '';
}

// ─────────────────────────────────────────────
// UTILIDADES
// ─────────────────────────────────────────────
function extraerUrl(raw) {
    if (!raw) return '';
    const src = (typeof raw === 'object')
        ? (raw.src || raw.url || raw.link || '')
        : String(raw);
    if (!src) return '';
    if (src.startsWith('https://') || src.startsWith('http://')) return src;
    const m = src.match(/wix:image:\/\/v1\/([^\/\#]+)/);
    if (m) return `https://static.wixstatic.com/media/${m[1]}`;
    return src;
}

function obtenerAño(fechaVal) {
    if (!fechaVal) return '';
    const d = new Date(fechaVal);
    return isNaN(d.getTime()) ? String(fechaVal) : String(d.getFullYear());
}
function iniciarAliados() {
    const htmlElement = $w(ID_ALIADOS);
    if (!htmlElement) {
        console.warn(`⚠️ No se encontró ${ID_ALIADOS}`);
        return;
    }

    console.log(`🟢 Configurando listener para ${ID_ALIADOS}`);

    let dataAlreadySent = false;
    htmlElement.onMessage(async event => {
        console.log(`📩 Mensaje recibido de ${ID_ALIADOS}:`, event.data);
        if (event.data === 'READY' && !dataAlreadySent) {
            dataAlreadySent = true;
            console.log(`✅ READY detectado en ${ID_ALIADOS} → cargando Aliados`);
            await enviarAliados(htmlElement);
        }
    });
}

async function enviarAliados(htmlElement) {
    try {
        console.log('🔍 Consultando colección:', COL_ALIADOS);
        const result = await wixData.query(COL_ALIADOS)
            .limit(100)
            .find();

        console.log('📦 Items obtenidos:', result.items.length);
        if (result.items.length === 0) {
            console.warn('⚠️ La colección está vacía');
            htmlElement.postMessage({ type: 'ALIADOS', payload: [] });
            return;
        }

        const payload = result.items.map((item, index) => {
            const mediaRaw = item.mediagallery;
            console.log(`[${index}] mediagallery raw:`, mediaRaw);
            const imageForExtract = Array.isArray(mediaRaw) ? mediaRaw[0] : mediaRaw;
            const url = extraerUrl(imageForExtract);
            console.log(`[${index}] URL extraída:`, url);
            return { imagen: url };
        }).filter(item => item.imagen !== '');

        console.log('📤 Payload final a enviar:', payload);
        htmlElement.postMessage({ type: 'ALIADOS', payload });
    } catch (err) {
        console.error('❌ Error cargando Aliados:', err.message);
        htmlElement.postMessage({ type: 'ERROR', message: err.message });
    }
}