export const CNCWoodGraphic = ({ pattern = 'radial', dark = false, className = '' }) => {
    const baseWoodLight = "#D97706";
    const woodBgLight = "#FEF3C7";
    const lineLight = "#B45309";

    const baseWoodDark = "#92400E";
    const woodBgDark = "#1F2937";
    const lineDark = "#F59E0B";

    const stroke = dark ? lineDark : lineLight;
    const fill = dark ? woodBgDark : woodBgLight;
    const accent = dark ? baseWoodDark : baseWoodLight;

    return (
        <div className={`relative overflow-hidden w-full h-full flex items-center justify-center rounded-lg ${className}`}>
            <svg className="w-full h-full object-cover" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id={`wood-grad-${pattern}`} cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={dark ? '#111827' : '#FFFBEB'} stopOpacity="0.9" />
                    </radialGradient>
                    <pattern id="grain" width="100" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 0 10 Q 25 5, 50 10 T 100 10" fill="none" stroke={stroke} strokeWidth="0.4" opacity="0.3" />
                    </pattern>
                </defs>

                {/* Base Background */}
                <rect width="600" height="400" fill={fill} />
                <rect width="600" height="400" fill={`url(#wood-grad-${pattern})`} />
                <rect width="600" height="400" fill="url(#grain)" opacity="0.5" />

                {/* Dynamic Parametric CNC Cut Patterns */}
                {pattern === 'radial' && (
                    <g stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.75">
                        {[20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((r, i) => (
                            <circle key={i} cx="300" cy="200" r={r} strokeDasharray={i % 2 === 0 ? "4 4" : "12 6"} />
                        ))}
                        <line x1="100" y1="200" x2="500" y2="200" strokeWidth="1" strokeDasharray="6 6" />
                        <line x1="300" y1="50" x2="300" y2="350" strokeWidth="1" strokeDasharray="6 6" />
                        <circle cx="300" cy="200" r="140" stroke={accent} strokeWidth="4" />
                    </g>
                )}

                {pattern === 'waves' && (
                    <g stroke={stroke} strokeWidth="2" fill="none" opacity="0.6">
                        {[30, 70, 110, 150, 190, 230, 270, 310, 350].map((y, i) => (
                            <path key={i} d={`M 0 ${y} Q 150 ${y - 40}, 300 ${y} T 600 ${y}`} strokeWidth={i % 2 === 0 ? "3" : "1.5"} />
                        ))}
                        <circle cx="450" cy="150" r="50" fill={accent} opacity="0.3" stroke={stroke} strokeWidth="2" />
                    </g>
                )}

                {pattern === 'lattice' && (
                    <g stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.7">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 40 20 L 20 40 L 0 20 Z" fill="none" stroke={stroke} strokeWidth="1.2" />
                            <circle cx="20" cy="20" r="4" fill={accent} opacity="0.6" />
                        </pattern>
                        <rect width="600" height="400" fill="url(#grid)" />
                        <rect x="50" y="40" width="500" height="320" rx="10" stroke={accent} strokeWidth="3" fill="none" />
                    </g>
                )}

                {pattern === 'parametric' && (
                    <g stroke={stroke} fill="none">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <line
                                key={i}
                                x1={i * 26}
                                y1="0"
                                x2={i * 26 + 40}
                                y2="400"
                                stroke={i % 3 === 0 ? accent : stroke}
                                strokeWidth={i % 2 === 0 ? "3" : "1"}
                                opacity="0.65"
                            />
                        ))}
                    </g>
                )}

                {pattern === 'rose' && (
                    <g stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.8">
                        <polygon points="300,50 420,100 470,200 420,300 300,350 180,300 130,200 180,100" stroke={accent} strokeWidth="3" />
                        <polygon points="300,90 380,125 420,200 380,275 300,310 220,275 180,200 220,125" />
                        <circle cx="300" cy="200" r="45" fill={accent} opacity="0.4" />
                    </g>
                )}

                {pattern === 'fretwork' && (
                    <g stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.7">
                        {[60, 180, 300, 420, 540].map((x, i) => (
                            <g key={i} transform={`translate(${x - 40}, 50)`}>
                                <rect width="80" height="300" rx="40" stroke={stroke} strokeWidth="2" />
                                <path d="M 40 0 L 40 300 M 0 150 L 80 150" stroke={accent} strokeWidth="1.5" />
                            </g>
                        ))}
                    </g>
                )}

                {/* Aesthetic CNC Toolpath Marker Overlay */}
                <g transform="translate(480, 320)" opacity="0.85">
                    <rect width="100" height="60" rx="6" fill={dark ? "#111827" : "#FFFFFF"} stroke={stroke} strokeWidth="1.5" />
                    <text x="12" y="24" fill={stroke} fontSize="10" fontFamily="monospace" fontWeight="bold">CNC TOOLPATH</text>
                    <text x="12" y="42" fill={accent} fontSize="11" fontFamily="monospace">R: 0.25mm</text>
                </g>
            </svg>
        </div>
    );
};