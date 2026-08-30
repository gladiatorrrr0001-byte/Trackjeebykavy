// ==========================================
// TRACK-JEE.IN — MASTER JAVASCRIPT
// ==========================================

const STORAGE_KEYS = {
    TASKS: 'track_jee_tasks_v3',
    SYLLABUS: 'track_jee_syllabus_v3',
    TARGET_DATE: 'track_jee_target_date_v3'
};

// --- EXHAUSTIVE JEE MAIN SYLLABUS DATA ---
const DEFAULT_SYLLABUS_DATA = {
    physics: [
        // HIGH PRIORITY
        {
            id: 'phy_mod',
            name: 'Modern Physics & Dual Nature',
            category: 'high',
            topics: [
                { id: 'p_mod_1', name: 'Photoelectric Effect & Einstein Equation', completed: false },
                { id: 'p_mod_2', name: 'de-Broglie Wavelength & Matter Waves', completed: false },
                { id: 'p_mod_3', name: 'Bohr Atomic Model & Hydrogen Spectra', completed: false },
                { id: 'p_mod_4', name: 'Nuclear Binding Energy & Q-Value', completed: false },
                { id: 'p_mod_5', name: 'Radioactive Decay Laws & Half-Life', completed: false }
            ]
        },
        {
            id: 'phy_curr',
            name: 'Current Electricity',
            category: 'high',
            topics: [
                { id: 'p_cur_1', name: 'Drift Velocity, Current Density & Ohm’s Law', completed: false },
                { id: 'p_cur_2', name: 'Resistor Combinations & Color Code', completed: false },
                { id: 'p_cur_3', name: 'Kirchhoff’s Current & Voltage Laws', completed: false },
                { id: 'p_cur_4', name: 'Wheatstone Bridge & Meter Bridge', completed: false },
                { id: 'p_cur_5', name: 'Potentiometer: Comparison of EMF & Internal Resistance', completed: false }
            ]
        },
        {
            id: 'phy_mag',
            name: 'Moving Charges & Magnetism',
            category: 'high',
            topics: [
                { id: 'p_mag_1', name: 'Biot-Savart Law & Circular Coils', completed: false },
                { id: 'p_mag_2', name: 'Ampere’s Circuital Law & Solenoid/Toroid', completed: false },
                { id: 'p_mag_3', name: 'Lorentz Force & Motion in Combined Fields', completed: false },
                { id: 'p_mag_4', name: 'Torque on Magnetic Dipole & Galvanometer Conversion', completed: false }
            ]
        },
        {
            id: 'phy_thermo',
            name: 'Thermodynamics & Kinetic Theory of Gases',
            category: 'high',
            topics: [
                { id: 'p_th_1', name: 'Zeroth & First Law (Isothermal, Adiabatic, Isochoric)', completed: false },
                { id: 'p_th_2', name: 'Work Done in Thermodynamic Processes & PV Indicator Diagrams', completed: false },
                { id: 'p_th_3', name: 'Second Law, Carnot Engine Efficiency & Refrigerator COP', completed: false },
                { id: 'p_th_4', name: 'Ideal Gas Equation & RMS / Most Probable Speeds', completed: false },
                { id: 'p_th_5', name: 'Degrees of Freedom & Specific Heat Capacities (Cp, Cv)', completed: false }
            ]
        },
        {
            id: 'phy_electro',
            name: 'Electrostatics & Capacitance',
            category: 'high',
            topics: [
                { id: 'p_el_1', name: 'Coulomb’s Law & Electric Field Intensity', completed: false },
                { id: 'p_el_2', name: 'Gauss’s Law & Continuous Charge Distributions', completed: false },
                { id: 'p_el_3', name: 'Electrostatic Potential & Dipole Interactions', completed: false },
                { id: 'p_el_4', name: 'Parallel Plate Capacitors & Dielectrics', completed: false },
                { id: 'p_el_5', name: 'Energy Stored & Charge Redistribution', completed: false }
            ]
        },
        {
            id: 'phy_semi',
            name: 'Semiconductor Electronics',
            category: 'high',
            topics: [
                { id: 'p_sm_1', name: 'Intrinsic & Extrinsic Semiconductors (Doping)', completed: false },
                { id: 'p_sm_2', name: 'p-n Junction Diode (Forward/Reverse Bias)', completed: false },
                { id: 'p_sm_3', name: 'Half-Wave & Full-Wave Rectifiers', completed: false },
                { id: 'p_sm_4', name: 'Zener Diode as Voltage Regulator', completed: false },
                { id: 'p_sm_5', name: 'Logic Gates (AND, OR, NOT, NAND, NOR)', completed: false }
            ]
        },
        // MODERATE PRIORITY
        {
            id: 'phy_optics',
            name: 'Ray Optics & Optical Instruments',
            category: 'moderate',
            topics: [
                { id: 'p_ro_1', name: 'Spherical Mirrors & Mirror Formula', completed: false },
                { id: 'p_ro_2', name: 'Refraction & Total Internal Reflection', completed: false },
                { id: 'p_ro_3', name: 'Thin Lens Formula & Lens Maker Equation', completed: false },
                { id: 'p_ro_4', name: 'Prisms (Dispersion & Deviation)', completed: false },
                { id: 'p_ro_5', name: 'Microscopes & Astronomical Telescopes', completed: false }
            ]
        },
        {
            id: 'phy_waveoptics',
            name: 'Wave Optics',
            category: 'moderate',
            topics: [
                { id: 'p_wo_1', name: 'Huygens Principle & Wavefronts', completed: false },
                { id: 'p_wo_2', name: 'Interference & Young’s Double Slit Experiment', completed: false },
                { id: 'p_wo_3', name: 'Single Slit Diffraction & Central Maxima', completed: false },
                { id: 'p_wo_4', name: 'Brewster’s Law & Polarisation', completed: false }
            ]
        },
        {
            id: 'phy_emi_ac',
            name: 'Electromagnetic Induction & Alternating Current',
            category: 'moderate',
            topics: [
                { id: 'p_emi_1', name: 'Faraday’s Law & Lenz’s Law', completed: false },
                { id: 'p_emi_2', name: 'Self & Mutual Inductance', completed: false },
                { id: 'p_emi_3', name: 'LCR Series Circuit & Phasor Diagrams', completed: false },
                { id: 'p_emi_4', name: 'Resonance, Quality Factor & AC Power Factor', completed: false }
            ]
        },
        {
            id: 'phy_rot',
            name: 'Rotational Motion & System of Particles',
            category: 'moderate',
            topics: [
                { id: 'p_rot_1', name: 'Center of Mass of Discrete & Continuous Systems', completed: false },
                { id: 'p_rot_2', name: 'Moment of Inertia & Parallel/Perpendicular Axes', completed: false },
                { id: 'p_rot_3', name: 'Torque, Angular Momentum & Conservation', completed: false },
                { id: 'p_rot_4', name: 'Pure Rolling Motion on Inclines', completed: false }
            ]
        },
        {
            id: 'phy_grav',
            name: 'Gravitation',
            category: 'moderate',
            topics: [
                { id: 'p_gr_1', name: 'Universal Law of Gravitation & Acceleration (g)', completed: false },
                { id: 'p_gr_2', name: 'Gravitational Potential Energy & Escape Velocity', completed: false },
                { id: 'p_gr_3', name: 'Orbital Velocity & Kepler’s Laws of Planetary Motion', completed: false }
            ]
        },
        {
            id: 'phy_shm_waves',
            name: 'Oscillations (SHM) & Waves',
            category: 'moderate',
            topics: [
                { id: 'p_shm_1', name: 'Simple Harmonic Motion Dynamics & Equations', completed: false },
                { id: 'p_shm_2', name: 'Simple Pendulum & Spring-Mass Systems', completed: false },
                { id: 'p_shm_3', name: 'Transverse & Longitudinal Wave Equations', completed: false },
                { id: 'p_shm_4', name: 'Standing Waves in Strings & Organ Pipes', completed: false },
                { id: 'p_shm_5', name: 'Beats & Doppler Effect', completed: false }
            ]
        },
        // LOW PRIORITY
        {
            id: 'phy_units',
            name: 'Units, Dimensions & Errors',
            category: 'low',
            topics: [
                { id: 'p_un_1', name: 'SI Units & Dimensional Analysis Applications', completed: false },
                { id: 'p_un_2', name: 'Error Propagation & Significant Figures', completed: false },
                { id: 'p_un_3', name: 'Vernier Calipers & Screw Gauge Measurements', completed: false }
            ]
        },
        {
            id: 'phy_kinematics',
            name: 'Kinematics (1D & 2D)',
            category: 'low',
            topics: [
                { id: 'p_kin_1', name: 'Equations of Rectilinear Motion & Graphs', completed: false },
                { id: 'p_kin_2', name: 'Projectile Motion (Ground-to-Ground & Incline)', completed: false },
                { id: 'p_kin_3', name: 'Relative Velocity in 1D & 2D (Rain-Man / River-Boat)', completed: false }
            ]
        },
        {
            id: 'phy_nlm_wep',
            name: 'Laws of Motion & Work-Energy-Power',
            category: 'low',
            topics: [
                { id: 'p_nlm_1', name: 'Newton’s Laws of Motion & Free Body Diagrams', completed: false },
                { id: 'p_nlm_2', name: 'Static, Limiting & Kinetic Friction', completed: false },
                { id: 'p_nlm_3', name: 'Work-Energy Theorem & Conservation of Energy', completed: false },
                { id: 'p_nlm_4', name: 'Elastic & Inelastic Collisions (1D & 2D)', completed: false }
            ]
        },
        {
            id: 'phy_fluids_solids',
            name: 'Properties of Solids & Fluids',
            category: 'low',
            topics: [
                { id: 'p_fl_1', name: 'Hooke’s Law, Young’s Modulus & Stress-Strain Curve', completed: false },
                { id: 'p_fl_2', name: 'Pascal’s Law, Archimedes Principle & Buoyancy', completed: false },
                { id: 'p_fl_3', name: 'Bernoulli’s Principle & Equation of Continuity', completed: false },
                { id: 'p_fl_4', name: 'Viscosity, Stokes Law & Terminal Velocity', completed: false },
                { id: 'p_fl_5', name: 'Surface Tension, Surface Energy & Capillarity', completed: false }
            ]
        },
        {
            id: 'phy_em_waves',
            name: 'Electromagnetic Waves',
            category: 'low',
            topics: [
                { id: 'p_em_1', name: 'Displacement Current & Maxwell’s Equations', completed: false },
                { id: 'p_em_2', name: 'Electromagnetic Spectrum & Wave Characteristics', completed: false }
            ]
        }
    ],

    chemistry: [
        // HIGH PRIORITY
        {
            id: 'chem_coord',
            name: 'Coordination Compounds',
            category: 'high',
            topics: [
                { id: 'c_cd_1', name: 'Werner’s Theory & IUPAC Nomenclature', completed: false },
                { id: 'c_cd_2', name: 'Structural & Stereoisomerism', completed: false },
                { id: 'c_cd_3', name: 'Valence Bond Theory (VBT) & Magnetic Moments', completed: false },
                { id: 'c_cd_4', name: 'Crystal Field Theory (CFT) & Octahedral/Tetrahedral Splitting', completed: false },
                { id: 'c_cd_5', name: 'Stability & Applications of Complexes', completed: false }
            ]
        },
        {
            id: 'chem_goc',
            name: 'General Organic Chemistry (GOC)',
            category: 'high',
            topics: [
                { id: 'c_goc_1', name: 'Inductive, Mesomeric (Resonance) & Hyperconjugation', completed: false },
                { id: 'c_goc_2', name: 'Aromaticity, Anti-aromaticity & Huckel’s Rule', completed: false },
                { id: 'c_goc_3', name: 'Stability of Carbocations, Carbanions & Free Radicals', completed: false },
                { id: 'c_goc_4', name: 'Acidic Strength of Carboxylic Acids & Phenols', completed: false },
                { id: 'c_goc_5', name: 'Basic Strength of Amines', completed: false }
            ]
        },
        {
            id: 'chem_carbonyl',
            name: 'Aldehydes, Ketones & Carboxylic Acids',
            category: 'high',
            topics: [
                { id: 'c_cb_1', name: 'Nucleophilic Addition Reactions of Carbonyls', completed: false },
                { id: 'c_cb_2', name: 'Aldol Condensation & Cross Aldol', completed: false },
                { id: 'c_cb_3', name: 'Cannizzaro Reaction & Benzoin Condensation', completed: false },
                { id: 'c_cb_4', name: 'Clemmensen, Wolff-Kishner & Tollens/Fehling Tests', completed: false },
                { id: 'c_cb_5', name: 'HVZ Reaction & Decarboxylation', completed: false }
            ]
        },
        {
            id: 'chem_bonding',
            name: 'Chemical Bonding & Molecular Structure',
            category: 'high',
            topics: [
                { id: 'c_bd_1', name: 'Ionic & Covalent Character (Fajan’s Rules)', completed: false },
                { id: 'c_bd_2', name: 'VSEPR Theory & Molecular Shapes', completed: false },
                { id: 'c_bd_3', name: 'Hybridization (sp, sp2, sp3, sp3d, sp3d2)', completed: false },
                { id: 'c_bd_4', name: 'Molecular Orbital Theory (Bond Order & Magnetism)', completed: false },
                { id: 'c_bd_5', name: 'Hydrogen Bonding & Dipole Moment', completed: false }
            ]
        },
        {
            id: 'chem_thermo',
            name: 'Chemical Thermodynamics & Energetics',
            category: 'high',
            topics: [
                { id: 'c_th_1', name: 'State Functions, First Law & Enthalpy (ΔH vs ΔU)', completed: false },
                { id: 'c_th_2', name: 'Hess’s Law & Bond Dissociation Enthalpies', completed: false },
                { id: 'c_th_3', name: 'Entropy (ΔS) & Spontaneity (Second Law)', completed: false },
                { id: 'c_th_4', name: 'Gibbs Free Energy (ΔG) & Equilibrium Constant', completed: false }
            ]
        },
        {
            id: 'chem_equilibrium',
            name: 'Chemical & Ionic Equilibrium',
            category: 'high',
            topics: [
                { id: 'c_eq_1', name: 'Law of Mass Action, Kp & Kc Relationships', completed: false },
                { id: 'c_eq_2', name: 'Le Chatelier’s Principle (Temp, Pressure, Inert Gas)', completed: false },
                { id: 'c_eq_3', name: 'Ostwald’s Dilution Law & pH Calculations', completed: false },
                { id: 'c_eq_4', name: 'Buffer Solutions (Henderson Equation)', completed: false },
                { id: 'c_eq_5', name: 'Salt Hydrolysis & Solubility Product (Ksp)', completed: false }
            ]
        },
        // MODERATE PRIORITY
        {
            id: 'chem_kinetics',
            name: 'Chemical Kinetics',
            category: 'moderate',
            topics: [
                { id: 'c_kn_1', name: 'Rate of Reaction, Order & Molecularity', completed: false },
                { id: 'c_kn_2', name: 'Zero and First Order Integrated Rate Laws', completed: false },
                { id: 'c_kn_3', name: 'Half-Life Equations & Graphs', completed: false },
                { id: 'c_kn_4', name: 'Arrhenius Equation & Activation Energy (Ea)', completed: false }
            ]
        },
        {
            id: 'chem_electrochem',
            name: 'Electrochemistry',
            category: 'moderate',
            topics: [
                { id: 'c_el_1', name: 'Galvanic Cells, Standard EMF & Nernst Equation', completed: false },
                { id: 'c_el_2', name: 'Electrolytic Conductance & Kohlrausch’s Law', completed: false },
                { id: 'c_el_3', name: 'Faraday’s Laws of Electrolysis', completed: false },
                { id: 'c_el_4', name: 'Batteries, Fuel Cells & Corrosion', completed: false }
            ]
        },
        {
            id: 'chem_solutions',
            name: 'Solutions & Colligative Properties',
            category: 'moderate',
            topics: [
                { id: 'c_sol_1', name: 'Concentration Terms (Molarity, Molality, Mole Fraction)', completed: false },
                { id: 'c_sol_2', name: 'Raoult’s Law & Ideal / Non-Ideal Solutions', completed: false },
                { id: 'c_sol_3', name: 'Relative Lowering of Vapor Pressure & Elevation in BP', completed: false },
                { id: 'c_sol_4', name: 'Depression in Freezing Point & Osmotic Pressure', completed: false },
                { id: 'c_sol_5', name: 'Van’t Hoff Factor (i) for Association/Dissociation', completed: false }
            ]
        },
        {
            id: 'chem_d_f_block',
            name: 'd- and f-Block Elements',
            category: 'moderate',
            topics: [
                { id: 'c_df_1', name: 'Electronic Configuration & Transition Metal Trends', completed: false },
                { id: 'c_df_2', name: 'Lanthanoid Contraction & Consequences', completed: false },
                { id: 'c_df_3', name: 'Preparation, Properties & Oxidation by KMnO4', completed: false },
                { id: 'c_df_4', name: 'Preparation & Reactions of K2Cr2O7', completed: false }
            ]
        },
        {
            id: 'chem_alkyl_halides',
            name: 'Haloalkanes, Haloarenes, Alcohols & Phenols',
            category: 'moderate',
            topics: [
                { id: 'c_rx_1', name: 'SN1 vs SN2 Mechanisms & Stereochemistry', completed: false },
                { id: 'c_rx_2', name: 'Elimination Reactions (E1, E2, Saytzeff vs Hofmann)', completed: false },
                { id: 'c_rx_3', name: 'Grignard Reagents Synthesis & Reactions', completed: false },
                { id: 'c_rx_4', name: 'Reimer-Tiemann & Kolbe’s Reactions of Phenol', completed: false },
                { id: 'c_rx_5', name: 'Williamson Ether Synthesis', completed: false }
            ]
        },
        {
            id: 'chem_amines',
            name: 'Amines & Diazonium Salts',
            category: 'moderate',
            topics: [
                { id: 'c_am_1', name: 'Hoffmann Bromamide Degradation & Gabriel Phthalimide', completed: false },
                { id: 'c_am_2', name: 'Carbylamine Test & Hinsberg Test', completed: false },
                { id: 'c_am_3', name: 'Diazotisation & Synthetic Uses of Diazonium Salts (Sandmeyer)', completed: false }
            ]
        },
        // LOW PRIORITY
        {
            id: 'chem_mole',
            name: 'Some Basic Concepts of Chemistry (Mole Concept)',
            category: 'low',
            topics: [
                { id: 'c_mol_1', name: 'Atomic & Molecular Masses, Mole Calculations', completed: false },
                { id: 'c_mol_2', name: 'Empirical & Molecular Formulas', completed: false },
                { id: 'c_mol_3', name: 'Stoichiometry & Limiting Reagents', completed: false }
            ]
        },
        {
            id: 'chem_atomic',
            name: 'Structure of Atom',
            category: 'low',
            topics: [
                { id: 'c_at_1', name: 'Quantum Numbers & Electronic Configurations', completed: false },
                { id: 'c_at_2', name: 'Aufbau Principle, Pauli Exclusion & Hund’s Rule', completed: false },
                { id: 'c_at_3', name: 'Heisenberg Uncertainty Principle', completed: false }
            ]
        },
        {
            id: 'chem_periodic',
            name: 'Periodic Classification & Periodicity',
            category: 'low',
            topics: [
                { id: 'c_per_1', name: 'Trends in Atomic & Ionic Radii', completed: false },
                { id: 'c_per_2', name: 'Ionization Enthalpy & Electron Gain Enthalpy', completed: false },
                { id: 'c_per_3', name: 'Electronegativity Trends across Periods/Groups', completed: false }
            ]
        },
        {
            id: 'chem_pblock',
            name: 'p-Block Elements (Groups 13 to 18)',
            category: 'low',
            topics: [
                { id: 'c_pb_1', name: 'Inert Pair Effect & Group 13/14 Trends', completed: false },
                { id: 'c_pb_2', name: 'Allotropes of Carbon & Phosphorus', completed: false },
                { id: 'c_pb_3', name: 'Oxoacids of Nitrogen, Phosphorus, Sulfur & Halogens', completed: false },
                { id: 'c_pb_4', name: 'Interhalogen Compounds & Noble Gas Chemistry', completed: false }
            ]
        },
        {
            id: 'chem_redox',
            name: 'Redox Reactions',
            category: 'low',
            topics: [
                { id: 'c_rd_1', name: 'Oxidation Numbers & Rules', completed: false },
                { id: 'c_rd_2', name: 'Balancing Redox Reactions (Ion-Electron / Half Reaction)', completed: false }
            ]
        },
        {
            id: 'chem_biomolecules',
            name: 'Biomolecules',
            category: 'low',
            topics: [
                { id: 'c_bm_1', name: 'Monosaccharides, Glucose Structure & Mutarotation', completed: false },
                { id: 'c_bm_2', name: 'Amino Acids, Zwitterion & Peptide Linkage', completed: false },
                { id: 'c_bm_3', name: 'Primary/Secondary Protein Structures & Denaturation', completed: false },
                { id: 'c_bm_4', name: 'Nucleic Acids (DNA vs RNA Base Pairing)', completed: false }
            ]
        }
    ],

    maths: [
        // HIGH PRIORITY
        {
            id: 'math_vec_3d',
            name: 'Vector Algebra & 3D Geometry',
            category: 'high',
            topics: [
                { id: 'm_v3_1', name: 'Dot Product, Cross Product & Projection of Vectors', completed: false },
                { id: 'm_v3_2', name: 'Scalar Triple Product & Vector Triple Product', completed: false },
                { id: 'm_v3_3', name: 'Direction Cosines & Direction Ratios', completed: false },
                { id: 'm_v3_4', name: 'Equations of Straight Lines in 3D & Skew Lines Distance', completed: false },
                { id: 'm_v3_5', name: 'Equations of Planes, Line-Plane Intersections & Foot of Perpendicular', completed: false }
            ]
        },
        {
            id: 'math_matrices',
            name: 'Matrices & Determinants',
            category: 'high',
            topics: [
                { id: 'm_mat_1', name: 'Matrix Operations, Transpose & Symmetric/Skew-Symmetric', completed: false },
                { id: 'm_mat_2', name: 'Properties of Determinants & Minors/Cofactors', completed: false },
                { id: 'm_mat_3', name: 'Adjoint & Inverse of a Square Matrix', completed: false },
                { id: 'm_mat_4', name: 'System of Linear Equations (Cramer’s Rule & Matrix Inversion)', completed: false },
                { id: 'm_mat_5', name: 'Characteristic Equations & Cayley-Hamilton Theorem', completed: false }
            ]
        },
        {
            id: 'math_def_int',
            name: 'Definite Integration & Area Under Curves',
            category: 'high',
            topics: [
                { id: 'm_di_1', name: 'Fundamental Theorem of Calculus & Standard Formulas', completed: false },
                { id: 'm_di_2', name: 'King’s Property, Queen’s Property & Periodic Integral Properties', completed: false },
                { id: 'm_di_3', name: 'Leibniz Rule for Differentiation Under Integral Sign', completed: false },
                { id: 'm_di_4', name: 'Definite Integral as Limit of a Sum', completed: false },
                { id: 'm_di_5', name: 'Area Bounded by Curves, Lines & Parabolas', completed: false }
            ]
        },
        {
            id: 'math_diff_eqn',
            name: 'Differential Equations',
            category: 'high',
            topics: [
                { id: 'm_de_1', name: 'Order, Degree & Formation of Differential Equations', completed: false },
                { id: 'm_de_2', name: 'Variable Separable Method', completed: false },
                { id: 'm_de_3', name: 'Homogeneous Differential Equations', completed: false },
                { id: 'm_de_4', name: 'Linear Differential Equations & Integrating Factor (IF)', completed: false },
                { id: 'm_de_5', name: 'Exact & Bernoulli Differential Equations', completed: false }
            ]
        },
        {
            id: 'math_conics',
            name: 'Coordinate Geometry (Conic Sections)',
            category: 'high',
            topics: [
                { id: 'm_cn_1', name: 'Circles: Standard Equations, Tangents, Normals & Orthogonality', completed: false },
                { id: 'm_cn_2', name: 'Parabola: Standard Forms, Focal Chords & Tangent Conditions', completed: false },
                { id: 'm_cn_3', name: 'Ellipse: Eccentricity, Directrices, Aux Circle & Tangents', completed: false },
                { id: 'm_cn_4', name: 'Hyperbola: Rectangular Hyperbola, Asymptotes & Conic Intersections', completed: false }
            ]
        },
        // MODERATE PRIORITY
        {
            id: 'math_functions',
            name: 'Functions, Limits, Continuity & Differentiability',
            category: 'moderate',
            topics: [
                { id: 'm_fcd_1', name: 'Domain, Range, Composite & Inverse Functions', completed: false },
                { id: 'm_fcd_2', name: 'Evaluation of Limits (0/0, inf/inf, L’Hopital’s Rule, 1^inf)', completed: false },
                { id: 'm_fcd_3', name: 'Continuity, Types of Discontinuity & Intermediate Value Theorem', completed: false },
                { id: 'm_fcd_4', name: 'Differentiability & Modulus Function Checks', completed: false }
            ]
        },
        {
            id: 'math_aod',
            name: 'Application of Derivatives (AOD)',
            category: 'moderate',
            topics: [
                { id: 'm_aod_1', name: 'Rate of Change & Tangents/Normals Equations', completed: false },
                { id: 'm_aod_2', name: 'Monotonicity: Strictly Increasing & Decreasing Functions', completed: false },
                { id: 'm_aod_3', name: 'Maxima and Minima (First & Second Derivative Tests)', completed: false },
                { id: 'm_aod_4', name: 'Rolle’s Theorem & Lagrange’s Mean Value Theorem (LMVT)', completed: false }
            ]
        },
        {
            id: 'math_prob',
            name: 'Probability',
            category: 'moderate',
            topics: [
                { id: 'm_pr_1', name: 'Classical Probability & Addition Theorem', completed: false },
                { id: 'm_pr_2', name: 'Conditional Probability & Multiplication Theorem', completed: false },
                { id: 'm_pr_3', name: 'Law of Total Probability & Bayes’ Theorem', completed: false },
                { id: 'm_pr_4', name: 'Random Variables, Probability Distributions & Binomial Theorem in Probability', completed: false }
            ]
        },
        {
            id: 'math_pnc',
            name: 'Permutations & Combinations',
            category: 'moderate',
            topics: [
                { id: 'm_pnc_1', name: 'Fundamental Principles of Counting', completed: false },
                { id: 'm_pnc_2', name: 'Permutations with Repetition & Circular Permutations', completed: false },
                { id: 'm_pnc_3', name: 'Combinations, Division & Distribution of Objects', completed: false },
                { id: 'm_pnc_4', name: 'Derangements & Multinomial Theorem', completed: false }
            ]
        },
        {
            id: 'math_seq',
            name: 'Sequence & Series',
            category: 'moderate',
            topics: [
                { id: 'm_sq_1', name: 'Arithmetic Progressions (AP) & AM', completed: false },
                { id: 'm_sq_2', name: 'Geometric Progressions (GP), Infinite GP & GM', completed: false },
                { id: 'm_sq_3', name: 'Arithmetico-Geometric Progression (AGP)', completed: false },
                { id: 'm_sq_4', name: 'Special Series (Sigma n, Sigma n^2, Method of Differences)', completed: false }
            ]
        },
        {
            id: 'math_complex',
            name: 'Complex Numbers & Quadratic Equations',
            category: 'moderate',
            topics: [
                { id: 'm_cx_1', name: 'Modulus, Argument & Polar/Euler Forms', completed: false },
                { id: 'm_cx_2', name: 'Triangle Inequality & Geometry of Complex Numbers', completed: false },
                { id: 'm_cx_3', name: 'Cube Roots of Unity & De Moivre’s Theorem', completed: false },
                { id: 'm_cx_4', name: 'Roots of Quadratic Equation, Discriminant & Nature of Roots', completed: false },
                { id: 'm_cx_5', name: 'Location of Roots & Common Root Conditions', completed: false }
            ]
        },
        // LOW PRIORITY
        {
            id: 'math_straight_lines',
            name: 'Straight Lines & Pair of Straight Lines',
            category: 'low',
            topics: [
                { id: 'm_sl_1', name: 'Slope Forms, Intercept Forms & Normal Form', completed: false },
                { id: 'm_sl_2', name: 'Distance Between Parallel Lines & Perpendicular Distance', completed: false },
                { id: 'm_sl_3', name: 'Angle Bisectors & Family of Straight Lines', completed: false }
            ]
        },
        {
            id: 'math_binomial',
            name: 'Binomial Theorem',
            category: 'low',
            topics: [
                { id: 'm_bn_1', name: 'General Term & Middle Term Calculations', completed: false },
                { id: 'm_bn_2', name: 'Properties & Summation of Binomial Coefficients', completed: false },
                { id: 'm_bn_3', name: 'Divisibility & Remainder Problems using Binomial Theorem', completed: false }
            ]
        },
        {
            id: 'math_trig',
            name: 'Trigonometric Ratios, Equations & Inverse Trigonometry',
            category: 'low',
            topics: [
                { id: 'm_tr_1', name: 'Compound Angles, Multiple & Submultiple Angles', completed: false },
                { id: 'm_tr_2', name: 'General Solutions of Trigonometric Equations', completed: false },
                { id: 'm_tr_3', name: 'Inverse Trigonometric Functions (Domain, Range & Properties)', completed: false }
            ]
        },
        {
            id: 'math_stats',
            name: 'Statistics',
            category: 'low',
            topics: [
                { id: 'm_st_1', name: 'Mean, Median & Mode of Grouped/Ungrouped Data', completed: false },
                { id: 'm_st_2', name: 'Variance & Standard Deviation Calculations', completed: false },
                { id: 'm_st_3', name: 'Effect of Change of Origin & Scale on Variance', completed: false }
            ]
        },
        {
            id: 'math_sets_rel',
            name: 'Sets, Relations & Mathematical Reasoning',
            category: 'low',
            topics: [
                { id: 'm_sr_1', name: 'Venn Diagrams & Operations on Sets', completed: false },
                { id: 'm_sr_2', name: 'Reflexive, Symmetric, Transitive & Equivalence Relations', completed: false },
                { id: 'm_sr_3', name: 'Tautology, Contradiction & Truth Table Analysis', completed: false }
            ]
        },
        {
            id: 'math_indef_int',
            name: 'Indefinite Integration',
            category: 'low',
            topics: [
                { id: 'm_ii_1', name: 'Standard Algebraic & Trigonometric Integrals', completed: false },
                { id: 'm_ii_2', name: 'Integration by Substitution & Partial Fractions', completed: false },
                { id: 'm_ii_3', name: 'Integration by Parts & ILATE Rule', completed: false }
            ]
        }
    ]
};

// --- APPLICATION STATE ---
let syllabusData = JSON.parse(localStorage.getItem(STORAGE_KEYS.SYLLABUS)) || DEFAULT_SYLLABUS_DATA;
let taskList = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS)) || [];
let activeTaskInterval = null;
let activeTaskIndex = null;
let isTimerPaused = false;
let countdownInterval = null;

// ==========================================
// 1. DYNAMIC EXAM COUNTDOWN WITH DATE PICKER
// ==========================================
function setupExamCountdown() {
    const dateInput = document.getElementById('target-date-input');
    const countdownDisplay = document.getElementById('exam-countdown');

    // Default target: Jan 24, 2027
    let savedTarget = localStorage.getItem(STORAGE_KEYS.TARGET_DATE);
    if (!savedTarget) {
        savedTarget = '2027-01-24T09:00';
        localStorage.setItem(STORAGE_KEYS.TARGET_DATE, savedTarget);
    }

    if (dateInput) {
        dateInput.value = savedTarget;
        dateInput.addEventListener('change', (e) => {
            if (e.target.value) {
                localStorage.setItem(STORAGE_KEYS.TARGET_DATE, e.target.value);
                startCountdown(e.target.value);
            }
        });
    }

    startCountdown(savedTarget);

    function startCountdown(targetStr) {
        clearInterval(countdownInterval);
        const targetTime = new Date(targetStr).getTime();

        function tick() {
            const now = new Date().getTime();
            const diff = targetTime - now;

            if (!countdownDisplay) return;

            if (isNaN(diff)) {
                countdownDisplay.textContent = "Please select a valid date";
                return;
            }

            if (diff <= 0) {
                countdownDisplay.textContent = "Target Reached / Completed!";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        tick();
        countdownInterval = setInterval(tick, 1000);
    }
}

// ==========================================
// 2. LIVE SYLLABUS CALCULATION & UPDATES
// ==========================================
function updateSyllabusProgress() {
    let totalAll = 0;
    let completedAll = 0;

    const subjects = ['physics', 'chemistry', 'maths'];

    subjects.forEach(subject => {
        let subTotal = 0;
        let subDone = 0;

        syllabusData[subject].forEach(chapter => {
            chapter.topics.forEach(topic => {
                subTotal++;
                totalAll++;
                if (topic.completed) {
                    subDone++;
                    completedAll++;
                }
            });
        });

        const subPercent = subTotal === 0 ? 0 : Math.round((subDone / subTotal) * 100);

        const subText = document.getElementById(`${subject}-progress-text`);
        const subFill = document.getElementById(`${subject}-progress-fill`);
        if (subText) subText.textContent = `${subPercent}%`;
        if (subFill) subFill.style.width = `${subPercent}%`;
    });

    const overallPercent = totalAll === 0 ? 0 : Math.round((completedAll / totalAll) * 100);
    const overallText = document.getElementById('overall-progress-text');
    const overallFill = document.getElementById('overall-progress-fill');
    if (overallText) overallText.textContent = `${overallPercent}%`;
    if (overallFill) overallFill.style.width = `${overallPercent}%`;
}

function saveSyllabus() {
    localStorage.setItem(STORAGE_KEYS.SYLLABUS, JSON.stringify(syllabusData));
}

function renderSyllabus() {
    const subjects = ['physics', 'chemistry', 'maths'];
    const categories = [
        { key: 'high', label: 'High Priority Chapters (Must-Do)' },
        { key: 'moderate', label: 'Moderate Priority Chapters' },
        { key: 'low', label: 'Low Priority Chapters' }
    ];

    subjects.forEach(subject => {
        const container = document.getElementById(`${subject}-syllabus-container`);
        if (!container) return;

        container.innerHTML = '';

        categories.forEach(cat => {
            const chapters = syllabusData[subject].filter(ch => ch.category === cat.key);
            if (chapters.length === 0) return;

            const catWrapper = document.createElement('div');
            catWrapper.className = 'category-group';
            catWrapper.innerHTML = `<div class="cat-header ${cat.key}">● ${cat.label}</div>`;

            chapters.forEach(ch => {
                const card = document.createElement('div');
                card.className = 'chapter-card';
                card.innerHTML = `<strong class="chapter-title">${ch.name}</strong><div class="topic-list"></div>`;

                const topicContainer = card.querySelector('.topic-list');
                ch.topics.forEach(topic => {
                    const topicRow = document.createElement('div');
                    topicRow.className = 'topic-item';
                    topicRow.innerHTML = `
                        <input type="checkbox" id="${topic.id}" ${topic.completed ? 'checked' : ''}>
                        <label for="${topic.id}">${topic.name}</label>
                    `;

                    topicRow.querySelector('input').addEventListener('change', (e) => {
                        topic.completed = e.target.checked;
                        saveSyllabus();
                        updateSyllabusProgress();
                    });

                    topicContainer.appendChild(topicRow);
                });

                catWrapper.appendChild(card);
            });

            container.appendChild(catWrapper);
        });
    });

    updateSyllabusProgress();
}

// ==========================================
// 3. TASK MANAGER & FOCUS TIMER
// ==========================================
function formatHMS(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(taskList));
}

function renderTasks() {
    const list = document.getElementById('task-list');
    if (!list) return;

    list.innerHTML = '';

    taskList.forEach((task, index) => {
        const item = document.createElement('div');
        item.className = `task-card ${task.completed ? 'task-done' : ''}`;
        
        const displayDuration = task.hours >= 1 ? `${task.hours}h` : `${task.hours * 60}m`;

        item.innerHTML = `
            <div class="task-info">
                <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
                <label for="task-${index}">${task.text}</label>
                <span class="task-time-pill">${displayDuration}</span>
            </div>
            <div class="task-actions">
                <button class="btn-focus" data-index="${index}">Focus Mode</button>
                <button class="btn-del" data-index="${index}">&times;</button>
            </div>
        `;

        item.querySelector(`#task-${index}`).addEventListener('change', (e) => {
            taskList[index].completed = e.target.checked;
            saveTasks();
            renderTasks();
        });

        item.querySelector('.btn-focus').addEventListener('click', () => {
            startFocusSession(index);
        });

        item.querySelector('.btn-del').addEventListener('click', () => {
            taskList.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        list.appendChild(item);
    });
}

function setupTaskForm() {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const durationSelect = document.getElementById('task-duration-select');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input?.value.trim();
        const hours = parseFloat(durationSelect?.value || '1');

        if (text) {
            taskList.push({
                text,
                hours,
                remainingSeconds: Math.round(hours * 3600),
                completed: false
            });
            saveTasks();
            renderTasks();
            if (input) input.value = '';
        }
    });
}

function startFocusSession(index) {
    activeTaskIndex = index;
    isTimerPaused = false;
    const task = taskList[index];

    const modal = document.getElementById('fullscreen-timer-modal');
    const headline = document.getElementById('fullscreen-task-headline');
    const countdown = document.getElementById('fullscreen-task-countdown');
    const pauseBtn = document.getElementById('btn-pause-fullscreen');

    if (headline) headline.textContent = task.text;
    if (countdown) countdown.textContent = formatHMS(task.remainingSeconds);
    if (pauseBtn) pauseBtn.textContent = "Pause";

    modal?.classList.add('active');
    if (!document.fullscreenElement) {
        modal?.requestFullscreen?.().catch(() => {});
    }

    clearInterval(activeTaskInterval);
    activeTaskInterval = setInterval(() => {
        if (!isTimerPaused) {
            if (task.remainingSeconds > 0) {
                task.remainingSeconds--;
                if (countdown) countdown.textContent = formatHMS(task.remainingSeconds);
                saveTasks();
            } else {
                clearInterval(activeTaskInterval);
                alert(`Session finished for: ${task.text}`);
                exitFocusSession();
            }
        }
    }, 1000);
}

function exitFocusSession() {
    clearInterval(activeTaskInterval);
    const modal = document.getElementById('fullscreen-timer-modal');
    modal?.classList.remove('active');
    if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
    }
    renderTasks();
}

function setupTimerControls() {
    const pauseBtn = document.getElementById('btn-pause-fullscreen');
    pauseBtn?.addEventListener('click', () => {
        isTimerPaused = !isTimerPaused;
        pauseBtn.textContent = isTimerPaused ? "Resume" : "Pause";
    });

    document.getElementById('btn-exit-fullscreen')?.addEventListener('click', exitFocusSession);
}

// ==========================================
// 4. UI TAB SWITCHING
// ==========================================
function setupTabSwitching() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const target = btn.getAttribute('data-tab');
            document.getElementById(`${target}-tab-content`)?.classList.add('active');
        });
    });
}

// ==========================================
// 5. APPLICATION BOOTSTRAP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setupExamCountdown();
    setupTaskForm();
    setupTimerControls();
    setupTabSwitching();
    renderTasks();
    renderSyllabus();
});
